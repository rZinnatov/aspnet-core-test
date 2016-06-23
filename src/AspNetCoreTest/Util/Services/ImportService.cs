using ATQB.DAL.Connection;
using ATQB.DAL.Entities;
using ATQB.WebApp.Models.Import;
using ATQB.WebApp.Models.Import.Prepare;
using ATQB.WebApp.Models.Import.Mapping;
using ATQB.WebApp.Util.Connectors.AT;
using ATQB.WebApp.Util.Connectors.QB;
using ATQB.WebApp.Util.Enums;
using ATQB.WebApp.Util.Extensions;
using AutoMapper;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using AtUserInfo = ATQB.WebApp.Models.AT.UserInfo;
using AtLeaveType = ATQB.WebApp.Models.AT.LeaveType;
using AtTypeOfWork = ATQB.WebApp.Models.AT.TypeOfWork;
using System;

namespace ATQB.WebApp.Util.Services
{
    public class ImportService
    {
        private IConnection _db;
        private IAtConnector _actiTime;
        private IQbConnector _quickBooks;
        private IMapper _mapper;
        private TimeTrackCompressionService _ttCompressor;

        public ImportService(
            IConnection db,
            IMapper mapper,
            IAtConnector actiTime,
            IQbConnector quickBooks,
            TimeTrackCompressionService ttCompressor
        ) {
            _db = db;
            _mapper = mapper;
            _actiTime = actiTime;
            _quickBooks = quickBooks;
            _ttCompressor = ttCompressor;
        }


        public async Task<ImportInfo> ComputeImportDiff(PrepareImport model, Models.MappingRules mappingRules)
        {
            // <-- Extract TT -->
            var timeTrack = await _actiTime.GetTimeTrackData(
                model.StartDate,
                model.EndDate,
                model.Customers.SelectMany(c => c.ProjectIds),
                model.UserIds,
                model.ApprovedTime == ApprovedTimeStatuses.ApprovedOnly
            );
            
            var ttMaps = _db.TTMapRepository
                .GetAll()
                .Where(ttMap => model.StartDate <= ttMap.Date && ttMap.Date <= model.EndDate)
            ;

            var ttSummary = _ttCompressor.Compress(
                timeTrack,
                ttMaps,
                mappingRules
            );
            // </- Extract TT -->

            // TODO: Refact following extracts
            // <-- Extract new customers -->
            var mappedAtEntities = _db.TaskMapRepository.GetAll().Select(c => c.AtId);

            var newProjectIds = new int[] { };
            var newCustomerIds = new int[] { };
            if (mappingRules.QbCustomersImportFrom == QbCustomersImportFrom.Customers &&
                mappingRules.IsQbSubCustomersImported)
            {
                // <-- Extract new customers -->
                var mappedQbCustomerIds = _db.QbCustomerMapRepository.GetAll().Select(c => c.AtId);
                var atCustomerIds = timeTrack.Customers.Select(c => c.Id);

                newCustomerIds = atCustomerIds.Except(mappedQbCustomerIds).ToArray();
                // <-- Extract new customers -->

                newProjectIds = ttSummary.AtEntityIds.Except(mappedAtEntities).ToArray();
            }
            else if (mappingRules.QbCustomersImportFrom == QbCustomersImportFrom.Customers &&
                !mappingRules.IsQbSubCustomersImported)
            {
                newCustomerIds = ttSummary.AtEntityIds.Except(mappedAtEntities).ToArray();
            }
            else if(mappingRules.QbCustomersImportFrom == QbCustomersImportFrom.Projects)
            {
                newProjectIds = ttSummary.AtEntityIds.Except(mappedAtEntities).ToArray();
            }
            // </- Extract new customers -->


            // <-- Extract new users -->
            var mappedUserIds = _db.UserMapRepository.GetAll().Select(m => m.UserId );
            var userIds = timeTrack.UserInfo.Select(u => u.Id);
            
            var newUserIds = userIds.Except(mappedUserIds);
            // </- Extract new users -->

            // <-- Extract new types of work from TT -->
            var mappedTypeOfWorkIds = _db.WorkTypeMapRepository.GetAll().Select(t => t.WorkTypeId );
            var typeOfWorkIds = timeTrack.TypesOfWork.Select(t => t.Id );

            var newTypeOfWorkIds = typeOfWorkIds.Except(mappedTypeOfWorkIds);
            var newTypeOfWorks = timeTrack.TypesOfWork
                .Where(t => newTypeOfWorkIds.Contains(t.Id))
                .Select(t => new TypeOfWork { Id = t.Id, Name = t.Name, IsBillable = t.Billable })
            ;
            // </- Extract new types of work from TT -->

            // <-- Extract new leave types from TT -->
            var mappedLeaveTypeIds = _db.LeaveTypeMapRepository.GetAll().Select(t => t.LeaveTypeId );
            var leaveTypeIds = timeTrack.TypesOfWork.Select(t => t.Id );

            var newLeaveTypeIds = leaveTypeIds.Except(mappedLeaveTypeIds);
            var newLeaveTypes = timeTrack.LeaveTypes
                .Where(t => newLeaveTypeIds.Contains(t.Id))
                .Select(t => new LeaveType { Id = t.Id, Name = t.Name })
            ;
            // </- Extract new leave types from TT -->

            return new ImportInfo
            {
                TotalMinutes = ttSummary.NewTT.Sum(r => r.Minutes) + ttSummary.AdditiveTT.Sum(r => r.CorrectionMinutes),
                TotalCorrectionMinutes = ttSummary.SubstractiveTT.Sum(r => r.CorrectionMinutes),
                NewRecords = new NewRecords
                {
                    UserIds = newUserIds,
                    CustomerIds = newCustomerIds,
                    ProjectIds = newProjectIds,
                    LeaveTypes = newLeaveTypes,
                    TypeOfWorks = newTypeOfWorks
                },
                TTSummary = ttSummary
            };
        }
        public CreateImport CreateImport(int atUserId)
        {
            // <-- Get AuthToken -->
            var atUrl = _actiTime.Url.ToAtqbDbString();
            var authToken = _db.AuthTokenRepository.GetAll()
                .SingleOrDefault(t => t.AtUrl == atUrl)
            ;
            // </- Get AuthToken -->

            // <-- Check for import -->
            var isAnotherImportStarted = _db.ImportRepository.GetAll()
                .Where(i => i.AuthTokenId == authToken.Id && i.Status == (int)ImportStatuses.Active)
                .Any()
            ;
            if (isAnotherImportStarted)
            {
                return new CreateImport
                {
                    IsActive = false,
                    IsAnotherImportStarted = true
                };
            }
            // </- Check for import -->

            // <-- Create import -->
            var importEntity = _db.ImportRepository.Add(new Import
            {
                AtUserId = atUserId,
                AuthTokenId = authToken.Id,
                Status = (int)ImportStatuses.Active
            });
            _db.Save();
            // </- Create import -->

            return new CreateImport
            {
                ImportId = importEntity.Id,
                IsActive = importEntity.IsActive(),
                IsAnotherImportStarted = false
            };
        }

        // <-- TODO: Refact candidate -->
        public async Task<bool> ImportUsers(Map<AtUserInfo> usersMap)
        {
            var importId = usersMap.ImportId;

            // <-- Process Users that mapped as Never or Existing -->
            var notNewUserInfos = usersMap.Items
                .Where(mapItem => mapItem.ProcessingRule != ProcessingRules.New)
            ;
            var notNewUserMapEntities = _mapper
                .Map<IEnumerable<MapItem<AtUserInfo>>, IEnumerable<UserMap>>(notNewUserInfos)
            ;
            _db.UserMapRepository.AddRange(notNewUserMapEntities);
            await _db.Save();
            // </- Map Users that mapped as Never or Existing -->
            
            // <-- Process Users that mapped as New -->
            var newUserMap = usersMap.Items
                .Where(mapItem => mapItem.ProcessingRule == ProcessingRules.New)
            ;
            foreach (var userMapItem in newUserMap)
            {
                var user = userMapItem.AtEntity;

                // Create QB Employee
                var employee = _quickBooks.AddEmployee(
                    _mapper.Map<AtUserInfo, Intuit.Ipp.Data.Employee>(user)
                );

                // TODO: Check whether employee was added to QB

                // Insert it to DB
                var userEntity = new UserMap
                {
                    UserId = user.Id,
                    EmployeeId = employee.Id,
                    ProcessingRule = (int)ProcessingRules.Existing
                };

                _db.UserMapRepository.Add(userEntity);
                await _db.Save();
            }
            // </- Process Users that mapped as New -->

            return true;
        }
        public async Task<bool> ImportTypesOfWork(Map<AtTypeOfWork> typeOfWorkMap)
        {
            var importId = typeOfWorkMap.ImportId;

            // <-- Process Types Of Work that mapped as Never or Existing -->
            var notNewTypeOfWorkMaps = typeOfWorkMap.Items
                .Where(mapItem => mapItem.ProcessingRule != ProcessingRules.New)
            ;
            var notNewTypeOfWorkMapEntities = _mapper
                .Map<IEnumerable<MapItem<AtTypeOfWork>>, IEnumerable<TypeOfWorkMap>>(notNewTypeOfWorkMaps)
            ;
            _db.WorkTypeMapRepository.AddRange(notNewTypeOfWorkMapEntities);
            await _db.Save();
            // </- Process Types Of Work that mapped as Never or Existing -->

            // <-- Process Types Of Work that mapped as New -->
            var newTypeOfWorkMap = typeOfWorkMap.Items
                .Where(mapItem => mapItem.ProcessingRule == ProcessingRules.New)
            ;
            foreach (var typeOfWorkMapItem in newTypeOfWorkMap)
            {
                var typeOfWork = typeOfWorkMapItem.AtEntity;

                // Create QB service item
                var serviceItem = _quickBooks.AddItem(
                    _mapper.Map<AtTypeOfWork, Intuit.Ipp.Data.Item>(typeOfWork)
                );

                // TODO: Check whether service item was added to QB

                // Insert it to DB
                var typeOfWorkEntity = new TypeOfWorkMap
                {
                    WorkTypeId = typeOfWork.Id,
                    ServiceItemId = serviceItem.Id,
                    ProcessingRule = (int)ProcessingRules.Existing
                };
                _db.WorkTypeMapRepository.Add(typeOfWorkEntity);
                await _db.Save();
            }
            // </- Process Types Of Work that mapped as New -->

            return true;
        }
        public async Task<bool> ImportLeaveTypes(Map<AtLeaveType> leaveTypeMap)
        {
            var importId = leaveTypeMap.ImportId;

            // <-- Process Leave Type that mapped as Never or Existing -->
            var notNewLeaveTypeMaps = leaveTypeMap.Items
                .Where(mapItem => mapItem.ProcessingRule != ProcessingRules.New)
            ;
            var notNewLeaveTypeMapEntities = _mapper
                .Map<IEnumerable<MapItem<AtLeaveType>>, IEnumerable<LeaveTypeMap>>(notNewLeaveTypeMaps)
            ;
            _db.LeaveTypeMapRepository.AddRange(notNewLeaveTypeMapEntities);
            await _db.Save();
            // </- Process Leave Type that mapped as Never or Existing -->

            // <-- Process Leave Type that mapped as New -->
            var newLeaveTypeMap = leaveTypeMap.Items
                .Where(mapItem => mapItem.ProcessingRule == ProcessingRules.New)
            ;
            foreach (var leaveTypeMapItem in newLeaveTypeMap)
            {
                var leaveType = leaveTypeMapItem.AtEntity;

                // Create QB service item
                var serviceItem = _quickBooks.AddItem(
                    _mapper.Map<AtLeaveType, Intuit.Ipp.Data.Item>(leaveType)
                );

                // TODO: Check whether service item was added to QB

                // Insert it to DB
                var leaveTypeEntity = new LeaveTypeMap
                {
                    LeaveTypeId = leaveType.Id,
                    ServiceItemId = serviceItem.Id,
                    ProcessingRule = (int)ProcessingRules.Existing
                };
                _db.LeaveTypeMapRepository.Add(leaveTypeEntity);
                await _db.Save();
            }
            // </- Process Leave Type that mapped as New -->

            return true;
        }
        public async Task<bool> ImportTasks(IEnumerable<MapItem<Models.Import.Task>> tasksMap)
        {
            // <-- Tasks to QB customers -->
            //      <-- Process Tasks that mapped as Never or Existing -->
            var notNewTaskMaps = tasksMap
                .Where(mapItem => mapItem.ProcessingRule != ProcessingRules.New)
            ;
            var notNewTaskMapEntities = _mapper
                .Map<IEnumerable<MapItem<Models.Import.Task>>, IEnumerable<TaskMap>>(notNewTaskMaps)
            ;

            _db.TaskMapRepository.AddRange(notNewTaskMapEntities);
            await _db.Save();
            //      </- Process Tasks that mapped as Never or Existing -->

            //      <-- Process Tasks that mapped as New -->
            var newTasks = tasksMap
                .Where(mapItem => mapItem.ProcessingRule == ProcessingRules.New)
            ;
            foreach (var newTask in newTasks)
            {
                // Create QB Entity
                var qbCustomer = _quickBooks.AddCustomer(
                    _mapper.Map<MapItem<Models.Import.Task>, Intuit.Ipp.Data.Customer>(newTask)
                );

                // TODO: Check whether QB Entity was added to QB

                // Insert it to DB
                var taskEntity = new TaskMap
                {
                    AtId = newTask.AtEntity.Id,
                    QbId = qbCustomer.Id,
                    ProcessingRule = (int)ProcessingRules.Existing
                };
                _db.TaskMapRepository.Add(taskEntity);
                await _db.Save();
            }
            //      </- Process Tasks that mapped as New -->
            // </- Tasks to QB customers -->

            return true;
        }
        public async Task<bool> ImportTasks(Map<Models.Import.Task, Models.Import.Task> tasksMap)
        {
            // <-- Tasks to QB SubCustomers with ParentPustomer -->
            foreach (var taskMap in tasksMap.Items)
            {
                // <-- Process QB ParentCustomer. Return ParentCustomer id -->
                var parentCustomerId = "";

                if (taskMap.ProcessingRule == ProcessingRules.New && !taskMap.QbEntity.IsChild)
                {
                    var qbCustomer = _quickBooks.AddCustomer(
                        _mapper.Map<MapItem<Models.Import.Task>, Intuit.Ipp.Data.Customer>(taskMap)
                    );
                    // TODO: Check whether QB Entity was added to QB
                    parentCustomerId = qbCustomer.Id;

                    // Insert it to DB
                    var qbCustomerEntity = new QbCustomerMap
                    {
                        AtId = taskMap.AtEntity.Id,
                        QbId = qbCustomer.Id,
                        ProcessingRule = (int)ProcessingRules.Existing
                    };
                    _db.QbCustomerMapRepository.Add(qbCustomerEntity);
                    await _db.Save();
                }
                else
                {
                    parentCustomerId = taskMap.QbEntity.Id;
                    // TODO: Possibly need to update DB
                }
                // </- Process QB ParentCustomer. Return ParentCustomer id -->

                // <-- Create QB SubCustomers -->
                foreach (var task in taskMap.Items)
                {
                    task.QbEntity.ParentId = parentCustomerId;
                }
                await ImportTasks(taskMap.Items);
                // </- Create QB SubCustomers -->
            }
            // </- Tasks to QB SubCustomers with ParentPustomer -->

            return true;
        }
        // </- Refact candidate -->

        // TODO: Refact candidate
        public async Task<bool> ImportTimeTrack(ImportTT model)
        {
            // <-- New TT Records -->
            var newTTMaps = model.ATTTSummary.NewTT.Select(t => new TTMap
            {
                UserId = t.UserId,
                AtEntityId = t.AtEntityId,
                Minutes = t.Minutes,
                Revision = t.Revision,
                Date = t.Date
            });
            _db.TTMapRepository.AddRange(newTTMaps);

            foreach (var ttRecord in model.QBTTSummary.NewTT)
            {
                var spent = TimeSpan.FromMinutes(ttRecord.Minutes);
                // TODO: Use AutoMapper
                var timeActivity = new Intuit.Ipp.Data.TimeActivity
                {
                    NameOf = Intuit.Ipp.Data.TimeActivityTypeEnum.Employee,
                    NameOfSpecified = true,

                    AnyIntuitObject = new Intuit.Ipp.Data.ReferenceType
                    {
                        type = "Employee",
                        Value = ttRecord.EmployeeId
                    },
                    CustomerRef = new Intuit.Ipp.Data.ReferenceType
                    {
                        type = "Customer",
                        Value = ttRecord.CustomerId
                    },
                    ItemRef = new Intuit.Ipp.Data.ReferenceType
                    {
                        type = "Item",
                        Value = ttRecord.ServiceItemId
                    },

                    Hours = spent.Hours,
                    Minutes = spent.Minutes,

                    TxnDateSpecified = true,
                    TxnDate = ttRecord.Date,

                    Description = ttRecord.Description,
                    BillableStatus = Intuit.Ipp.Data.BillableStatusEnum.NotBillable,
                };
                _quickBooks.AddTimeActivity(timeActivity);
            }
            // </- New TT Records -->

            // <-- Substractive TT Records -->
            foreach (var ttRecord in model.ATTTSummary.SubstractiveTT)
            {
                var ttMap = _db.TTMapRepository
                    .GetAll()
                    .Single(t =>
                        t.UserId == ttRecord.UserId &&
                        t.AtEntityId == ttRecord.AtEntityId &&
                        t.Date == ttRecord.Date
                    )
                ;
                ttMap.Minutes = ttRecord.Minutes - ttRecord.CorrectionMinutes;
                _db.TTMapRepository.Update(ttMap);
            }

            foreach (var ttRecord in model.QBTTSummary.SubstractiveTT)
            {
                var spent = TimeSpan.FromMinutes(ttRecord.Minutes - ttRecord.CorrectionMinutes);
                // TODO: Use AutoMapper
                var timeActivity = new Intuit.Ipp.Data.TimeActivity
                {
                    NameOf = Intuit.Ipp.Data.TimeActivityTypeEnum.Employee,
                    NameOfSpecified = true,

                    AnyIntuitObject = new Intuit.Ipp.Data.ReferenceType
                    {
                        type = "Employee",
                        Value = ttRecord.EmployeeId
                    },
                    CustomerRef = new Intuit.Ipp.Data.ReferenceType
                    {
                        type = "Customer",
                        Value = ttRecord.CustomerId
                    },
                    ItemRef = new Intuit.Ipp.Data.ReferenceType
                    {
                        type = "Item",
                        Value = ttRecord.ServiceItemId
                    },

                    Hours = spent.Hours,
                    Minutes = spent.Minutes,

                    TxnDateSpecified = true,
                    TxnDate = ttRecord.Date,

                    Description = ttRecord.Description,
                    BillableStatus = Intuit.Ipp.Data.BillableStatusEnum.NotBillable,
                };
                _quickBooks.UpdateTimeActivity(timeActivity);
            }

            // <-- Additive TT Records -->
            foreach (var ttRecord in model.ATTTSummary.AdditiveTT)
            {
                var ttMap = _db.TTMapRepository
                    .GetAll()
                    .Single(t =>
                        t.UserId == ttRecord.UserId &&
                        t.AtEntityId == ttRecord.AtEntityId &&
                        t.Date == ttRecord.Date
                    )
                ;
                ttMap.Minutes = ttRecord.Minutes + ttRecord.CorrectionMinutes;
                _db.TTMapRepository.Update(ttMap);
            }

            foreach (var ttRecord in model.QBTTSummary.AdditiveTT)
            {
                var spent = TimeSpan.FromMinutes(ttRecord.Minutes + ttRecord.CorrectionMinutes);
                // TODO: Use AutoMapper
                var timeActivity = new Intuit.Ipp.Data.TimeActivity
                {
                    NameOf = Intuit.Ipp.Data.TimeActivityTypeEnum.Employee,
                    NameOfSpecified = true,

                    AnyIntuitObject = new Intuit.Ipp.Data.ReferenceType
                    {
                        type = "Employee",
                        Value = ttRecord.EmployeeId
                    },
                    CustomerRef = new Intuit.Ipp.Data.ReferenceType
                    {
                        type = "Customer",
                        Value = ttRecord.CustomerId
                    },
                    ItemRef = new Intuit.Ipp.Data.ReferenceType
                    {
                        type = "Item",
                        Value = ttRecord.ServiceItemId
                    },

                    Hours = spent.Hours,
                    Minutes = spent.Minutes,

                    TxnDateSpecified = true,
                    TxnDate = ttRecord.Date,

                    Description = ttRecord.Description,
                    BillableStatus = Intuit.Ipp.Data.BillableStatusEnum.NotBillable,
                };
                _quickBooks.UpdateTimeActivity(timeActivity);
            }
            // </- Additive TT Records -->

            return true;
        }
    }
}

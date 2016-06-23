using ATQB.WebApp.Models.AT;
using ATQB.WebApp.Models.Import;
using ATQB.WebApp.Models.Import.Mapping;
using AutoMapper;

namespace ATQB.WebApp.Util.Factories
{
    public class AutoMapperFactory
    {
        public static IMapper Build()
        {
            var config = new MapperConfiguration(_MapperConfiguration);

            return config.CreateMapper();
        }

        private static void _MapperConfiguration(IMapperConfiguration mapperConfig)
        {
            // <-- DB Entities. TODO: Refact. -->
            mapperConfig.CreateMap<MapItem<UserInfo>, DAL.Entities.UserMap>()
                .ForMember(d => d.UserId, opt => opt.MapFrom(s => s.AtEntity.Id))
                .ForMember(d => d.EmployeeId, opt => opt.MapFrom(s => s.QbEntity.Id))
                .ForMember(d => d.ProcessingRule, opt => opt.MapFrom(s => (int)s.ProcessingRule))
            ;
            mapperConfig.CreateMap<MapItem<TypeOfWork>, DAL.Entities.TypeOfWorkMap>()
                .ForMember(d => d.WorkTypeId, opt => opt.MapFrom(s => s.AtEntity.Id))
                .ForMember(d => d.ServiceItemId, opt => opt.MapFrom(s => s.QbEntity.Id))
                .ForMember(d => d.ProcessingRule, opt => opt.MapFrom(s => (int)s.ProcessingRule))
            ;
            mapperConfig.CreateMap<MapItem<LeaveType>, DAL.Entities.LeaveTypeMap>()
                .ForMember(d => d.LeaveTypeId, opt => opt.MapFrom(s => s.AtEntity.Id))
                .ForMember(d => d.ServiceItemId, opt => opt.MapFrom(s => s.QbEntity.Id))
                .ForMember(d => d.ProcessingRule, opt => opt.MapFrom(s => (int)s.ProcessingRule))
            ;
            mapperConfig.CreateMap<MapItem<Task>, DAL.Entities.TaskMap>()
                .ForMember(d => d.AtId, opt => opt.MapFrom(s => s.AtEntity.Id))
                .ForMember(d => d.QbId, opt => opt.MapFrom(s => s.QbEntity.Id))
                .ForMember(d => d.ProcessingRule, opt => opt.MapFrom(s => (int)s.ProcessingRule))
            ;
            // </- DB Entities -->

            // <-- QB Entities -->
            mapperConfig.CreateMap<UserInfo, Intuit.Ipp.Data.Employee>()
                .ForMember(d => d.Id, opt => opt.UseValue(null))
                .ForMember(d => d.Active, opt => opt.UseValue(true))
                .ForMember(d => d.ActiveSpecified, opt => opt.UseValue(true))
                .ForMember(d => d.GivenName, opt => opt.MapFrom(s => s.FirstName))
                .ForMember(d => d.FamilyName, opt => opt.MapFrom(s => s.LastName))
                .ForMember(d => d.MiddleName, opt => opt.MapFrom(s => s.MiddleName))
            ;
            mapperConfig.CreateMap<MapItem<Task>, Intuit.Ipp.Data.Customer>()
                .ForMember(d => d.Id, opt => opt.UseValue(null))
                .ForMember(d => d.Active, opt => opt.UseValue(true))
                .ForMember(d => d.ActiveSpecified, opt => opt.UseValue(true))

                .ForMember(d => d.DisplayName, opt => opt.MapFrom(s => s.AtEntity.Name))

                .ForMember(d => d.Job, opt => opt.MapFrom(s => s.QbEntity.IsChild))
                .ForMember(d => d.JobSpecified, opt => opt.UseValue(true))
                .ForMember(d => d.ParentRef, opt => opt.MapFrom(s => s.QbEntity.IsChild ? new Intuit.Ipp.Data.ReferenceType { Value = s.QbEntity.ParentId } : null))
            ;
            mapperConfig.CreateMap<TypeOfWork, Intuit.Ipp.Data.Item>()
                .ForMember(d => d.Active, opt => opt.UseValue(true))
                .ForMember(d => d.ActiveSpecified, opt => opt.UseValue(true))

                .ForMember(d => d.Id, opt => opt.UseValue(null))
                .ForMember(d => d.Name, opt => opt.MapFrom(s => s.Name))

                .ForMember(d => d.PurchaseCost, opt => opt.MapFrom(s => s.Price))
                .ForMember(d => d.PurchaseCostSpecified, opt => opt.UseValue(true))

                .ForMember(d => d.IncomeAccountRef, opt => opt.MapFrom(s => new Intuit.Ipp.Data.ReferenceType { Value = s.IncomeAccountId }))

                .ForMember(d => d.Type, opt => opt.UseValue(Intuit.Ipp.Data.ItemTypeEnum.Service))
                .ForMember(d => d.TypeSpecified, opt => opt.UseValue(true))
            ;
            mapperConfig.CreateMap<LeaveType, Intuit.Ipp.Data.Item>()
                .ForMember(d => d.Active, opt => opt.UseValue(true))
                .ForMember(d => d.ActiveSpecified, opt => opt.UseValue(true))

                .ForMember(d => d.Id, opt => opt.UseValue(null))
                .ForMember(d => d.Name, opt => opt.MapFrom(s => s.Name))

                .ForMember(d => d.PurchaseCost, opt => opt.MapFrom(s => s.Price))
                .ForMember(d => d.PurchaseCostSpecified, opt => opt.UseValue(true))

                .ForMember(d => d.IncomeAccountRef, opt => opt.MapFrom(s => new Intuit.Ipp.Data.ReferenceType { Value = s.IncomeAccountId }))

                .ForMember(d => d.Type, opt => opt.UseValue(Intuit.Ipp.Data.ItemTypeEnum.Service))
                .ForMember(d => d.TypeSpecified, opt => opt.UseValue(true))
            ;
            // </- QB Entities -->
        }
    }
}

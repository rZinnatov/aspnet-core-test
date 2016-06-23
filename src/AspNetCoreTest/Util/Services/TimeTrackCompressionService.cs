using System;
using System.Linq;
using System.Collections.Generic;
using ATQB.WebApp.Util.Enums;

using MappingRules = ATQB.WebApp.Models.MappingRules;
using ATRecord = ATQB.WebApp.Models.AT.Record;
using ImportTTRecord = ATQB.WebApp.Models.Import.TTRecord;
using TimeTrack = ATQB.WebApp.Util.Connectors.AT.Data.QbIntegratorV1.TimeTrack;

namespace ATQB.WebApp.Util.Services
{
    public class TimeTrackCompressionService
    {
        public class UserTotal
        {
            public int UserId { get; set; }
            public int TotalMinutes { get; set; }
            public int TotalCorrectionMinutes { get; set; }
        }
        public class TTSummary
        {
            public IEnumerable<int> AtEntityIds { get; set; }
            public IEnumerable<ATRecord> NewTT { get; set; }
            public IEnumerable<ATRecord> AdditiveTT { get; set; }
            public IEnumerable<ATRecord> SubstractiveTT { get; set; }
            public IEnumerable<UserTotal> UserTotals { get; set; }
        }
        
        public TTSummary Compress(
            TimeTrack timeTrack,
            IEnumerable<DAL.Entities.TTMap> ttMaps,
            MappingRules mappingRules
        ) {
            var mappedTTRecords = _MapTTRecords(timeTrack);
            var compressedTTRecords = _Compress(mappedTTRecords, mappingRules);

            return _BuildTTSummary(ttMaps, compressedTTRecords);
        }

        private TTSummary _BuildTTSummary(IEnumerable<DAL.Entities.TTMap> ttMaps, IEnumerable<ATRecord> compressedTTRecords)
        {
            var atEntityIds = new List<int>();

            var newTT = new List<ATRecord>();
            var additiveTT = new List<ATRecord>();
            var substractiveTT = new List<ATRecord>();
            foreach (var ttRecord in compressedTTRecords)
            {
                var ttMap = ttMaps.SingleOrDefault(t =>
                    t.UserId == ttRecord.UserId &&
                    t.AtEntityId == ttRecord.AtEntityId &&
                    t.Date == ttRecord.Date
                );

                if (ttMap == null)
                {
                    atEntityIds.Add(ttRecord.AtEntityId);
                    newTT.Add(ttRecord);
                    continue;
                }

                if (ttRecord.Revision == ttMap.Revision)
                {
                    continue;
                }


                atEntityIds.Add(ttRecord.AtEntityId);
                if (ttRecord.Minutes > ttMap.Minutes)
                {
                    ttRecord.CorrectionMinutes = ttRecord.Minutes - ttMap.Minutes;
                    additiveTT.Add(ttRecord);
                }
                else
                {
                    ttRecord.CorrectionMinutes = ttMap.Minutes - ttRecord.Minutes;
                    substractiveTT.Add(ttRecord);
                }
            }

            var userTotals = compressedTTRecords
                .GroupBy(r => new { r.UserId })
                .Select(r => new UserTotal
                {
                    UserId = r.Key.UserId,
                    TotalMinutes = r.ToList().Sum(a => a.Minutes),
                    TotalCorrectionMinutes = r.ToList().Sum(a => a.CorrectionMinutes)
                })
            ;
            return new TTSummary
            {
                AtEntityIds = atEntityIds,
                NewTT = newTT,
                AdditiveTT = additiveTT,
                SubstractiveTT = substractiveTT,
                UserTotals = userTotals
            };
        }
        private List<ImportTTRecord> _MapTTRecords(TimeTrack timeTrack)
        {
            var importTTRecords = new List<ImportTTRecord>();
            foreach (var ttRecord in timeTrack.TTRecords)
            {
                var task = timeTrack.Tasks.SingleOrDefault(t => t.Id == ttRecord.TaskId);
                if (task == null)
                {
                    throw new Exception($"No such task. Task id = {ttRecord.TaskId}");
                }
                var project = timeTrack.Projects.SingleOrDefault(p => p.Id == task.ProjectId);
                if (project == null)
                {
                    throw new Exception($"No such project. Project id = {task.ProjectId}");
                }

                var importTTRecord = new ImportTTRecord
                {
                    UserId = ttRecord.UserId,
                    TaskId = task.Id,
                    CustomerId = project.CustomerId,
                    ProjectId = project.Id,
                    TypeOfWorkId = task.BillingTypeId,
                    Minutes = ttRecord.Spent,
                    Revision = ttRecord.Revision,
                    Date = DateTime.Parse(ttRecord.Date),
                    TaskName = task.Name,
                    Comment = ttRecord.Comment
                };
                importTTRecords.Add(importTTRecord);
            }

            return importTTRecords;
        }
        // TODO: Refact candidate
        private IEnumerable<ATRecord> _Compress(IEnumerable<ImportTTRecord> importTTRecords, MappingRules mappingRules)
        {
            if (mappingRules.IsQbSubCustomersImported)
            {
                var atRecords = importTTRecords
                    .GroupBy(r => new { r.UserId, r.CustomerId, r.Date })
                    // TODO: Use AutoMapper
                    .Select(row => new ATRecord
                    {
                        UserId = row.Key.UserId,
                        AtEntityId = row.Key.CustomerId,
                        TypeOfWorkId = row.ToList().First().TypeOfWorkId,
                        Minutes = row.ToList().Sum(r => r.Minutes),
                        CorrectionMinutes = 0,
                        Revision = row.ToList().Max(r => r.Revision),
                        Date = row.Key.Date,
                        Description = ""
                    }
                );

                return atRecords;
            }
            else
            {
                var atRecords = importTTRecords
                    .GroupBy(r => new { r.UserId, r.ProjectId, r.Date })
                    // TODO: Use AutoMapper
                    .Select(row => new ATRecord
                    {
                        UserId = row.Key.UserId,
                        AtEntityId = row.Key.ProjectId,
                        TypeOfWorkId = row.ToList().First().TypeOfWorkId,
                        Minutes = row.ToList().Sum(r => r.Minutes),
                        CorrectionMinutes = 0,
                        Revision = row.ToList().Max(r => r.Revision),
                        Date = row.Key.Date,
                        Description = ""
                    }
                );

                return atRecords;
            }


            throw new Exception("Wrong MappingRules state");
        }
    }
}

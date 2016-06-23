using ATQB.DAL.Connection;
using System.Linq;
using System.Threading.Tasks;

namespace ATQB.WebApp.Util.Services
{
    public class MappingRulesService
    {
        private IConnection _db;


        public MappingRulesService(IConnection db)
        {
            _db = db;
        }


        public bool IsDone()
        {
            return _db.MappingRepository
                .GetAll()
                .Any()
            ;
        }
        public Models.MappingRules GetMappingRules()
        {
            var mappingRulesEntity = _db.MappingRepository.GetAll().FirstOrDefault();
            if (mappingRulesEntity == null)
            {
                return null;
            }

            var qbCustomersImportFrom = mappingRulesEntity.IsQbCustomersMapToAtCustomers
                ? Enums.QbCustomersImportFrom.Customers
                : Enums.QbCustomersImportFrom.Projects
            ;

            // TODO: use AutoMapper
            return new Models.MappingRules
            {
                QbCustomersImportFrom = qbCustomersImportFrom,
                IsQbSubCustomersImported = mappingRulesEntity.IsQbSubCustomersImported,
                IsTaskNamesImported = mappingRulesEntity.IsTaskNamesImported,
                IsCommentsImported = mappingRulesEntity.IsCommentsImported
            };
        }
        public async Task<bool> SetMappingRules(Models.MappingRules model)
        {
            _db.MappingRepository.Add(new DAL.Entities.Mapping
            {
                IsQbCustomersMapToAtCustomers = model.QbCustomersImportFrom == Enums.QbCustomersImportFrom.Customers,
                IsQbSubCustomersImported = model.IsQbSubCustomersImported
            });
            await _db.Save();

            return true;
        }
    }
}

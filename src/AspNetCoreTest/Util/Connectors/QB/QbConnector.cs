using Intuit.Ipp.Core;
using Intuit.Ipp.Data;
using Intuit.Ipp.DataService;
using Intuit.Ipp.LinqExtender;
using Intuit.Ipp.QueryFilter;
using Intuit.Ipp.Security;
using System.Collections.Generic;
using System.Linq;
using Auth = ATQB.WebApp.Models.QB.Auth;

namespace ATQB.WebApp.Util.Connectors.QB
{
    public class QbConnector : IQbConnector
    {
        private Auth _authModel;
        private DataService _dataService;
        private ServiceContext _serviceContext;

        public QbConnector()
        {
            _authModel = null;
            _serviceContext = null;
            _dataService = null;
        }

        public void Initialize(Auth authModel, string pathToLogsLocation)
        {
            _authModel = authModel;

            var requestValidator = new OAuthRequestValidator(
                authModel.AccessToken,
                authModel.AccessTokenSecret,
                authModel.ConsumerKey,
                authModel.ConsumerSecret
            );

            var serviceContext = new ServiceContext(
                authModel.RealmId,
                IntuitServicesType.QBO,
                requestValidator
            );
            serviceContext.IppConfiguration.BaseUrl.Qbo = "https://sandbox-quickbooks.api.intuit.com/";
            serviceContext.IppConfiguration.MinorVersion.Qbo = "3";
            serviceContext.IppConfiguration.Logger.RequestLog.EnableRequestResponseLogging = true;
            serviceContext.IppConfiguration.Logger.RequestLog.ServiceRequestLoggingLocation = pathToLogsLocation;
            _serviceContext = serviceContext;

            _dataService = new DataService(_serviceContext);
        }

        public IEnumerable<Account> GetAllIncomeAccounts()
        {
            var accountQueryService = new QueryService<Account>(_serviceContext);

            return accountQueryService.Where(a => a.AccountType == AccountTypeEnum.Income);
        }

        public Item GetItemById(string id)
        {
            return _dataService.FindById(new Item { Id = id });
        }
        public IEnumerable<Item> GetAllItems()
        {
            var employeeQueryService = new QueryService<Item>(_serviceContext);

            return employeeQueryService.Select(e => e);
        }
        public Item AddItem(Item item)
        {
            return _dataService.Add(item);
        }
        public Item UpdateItem(Item item)
        {
            return _dataService.Update(item);
        }

        public Employee GetEmployeeById(string id)
        {
            return _dataService.FindById(new Employee { Id = id });
        }
        public IEnumerable<Employee> GetAllEmployees()
        {
            var employeeQueryService = new QueryService<Employee>(_serviceContext);

            return employeeQueryService.Select(e => e);
        }
        public Employee AddEmployee(Employee employee)
        {
            return _dataService.Add(employee);
        }
        public Employee UpdateEmployee(Employee employee)
        {
            return _dataService.Update(employee);
        }

        public Customer GetCustomerById(string id)
        {
            return _dataService.FindById(new Customer { Id = id });
        }
        public IEnumerable<Customer> GetAllCustomers()
        {
            var employeeQueryService = new QueryService<Customer>(_serviceContext);

            return employeeQueryService.Select(e => e);
        }
        public Customer AddCustomer(Customer customer)
        {
            return _dataService.Add(customer);
        }
        public Customer UpdateCustomer(Customer customer)
        {
            return _dataService.Update(customer);
        }

        public void AddCustomFieldToTimeActivity()
        {
            var customFieldDefinition = new StringTypeCustomFieldDefinition
            {
                Name = "CustomField",
                EntityType = "TimeActivity"
            };
            customFieldDefinition = _dataService.Add(customFieldDefinition);
        }
        public TimeActivity GetTimeActivityById(string id)
        {
            return _dataService.FindById(new TimeActivity { Id = id });
        }
        public TimeActivity AddTimeActivity(TimeActivity timeActivity)
        {
            return _dataService.Add(timeActivity);
        }
        public TimeActivity UpdateTimeActivity(TimeActivity timeActivity)
        {
            return _dataService.Update(timeActivity);
        }
        public TimeActivity DeleteTimeActivity(TimeActivity timeActivity)
        {
            return _dataService.Delete(timeActivity);
        }
    }
}

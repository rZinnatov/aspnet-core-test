using System.Collections.Generic;
using Intuit.Ipp.Data;

namespace ATQB.WebApp.Util.Connectors.QB
{
    // TODO: Refact candidate
    public interface IQbConnector
    {
        void Initialize(Models.QB.Auth authModel, string pathToLogsLocation);

        IEnumerable<Account> GetAllIncomeAccounts();

        IEnumerable<Item> GetAllItems();
        IEnumerable<Employee> GetAllEmployees();
        IEnumerable<Customer> GetAllCustomers();

        Customer GetCustomerById(string id);
        Employee GetEmployeeById(string id);
        Item GetItemById(string id);
        TimeActivity GetTimeActivityById(string id);

        Customer AddCustomer(Customer customer);
        void AddCustomFieldToTimeActivity();
        Employee AddEmployee(Employee employee);
        Item AddItem(Item item);
        TimeActivity AddTimeActivity(TimeActivity timeActivity);

        Customer UpdateCustomer(Customer customer);
        Employee UpdateEmployee(Employee employee);
        Item UpdateItem(Item item);
        TimeActivity UpdateTimeActivity(TimeActivity timeActivity);

        TimeActivity DeleteTimeActivity(TimeActivity timeActivity);
    }

    public interface IQbConnectorV2
    {
        IEntity Add(IEntity qbEntity);
    }
}
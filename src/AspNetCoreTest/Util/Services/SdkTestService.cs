using ATQB.WebApp.Util.Connectors.QB;
using Intuit.Ipp.Data;
using Intuit.Ipp.Exception;
using System;
using System.Collections.Generic;
using System.Linq;

using TestModel = ATQB.WebApp.Models.Test;

namespace ATQB.WebApp.Util.Services
{
    public class SdkTestService
    {
        private IQbConnector _syncService;

        public SdkTestService(IQbConnector syncService)
        {
            _syncService = syncService;
        }


        public TestModel Test()
        {
            var tests = new List<TestModel>();

            tests.Add(_ItemTest());
            tests.Add(_EmployeeTest());
            tests.Add(_CustomerTest());
            tests.Add(_TimeActivityTest());

            // <-- Tests result -->
            var sdkTestResult = TestModel.TestResults.Passed;
            if (tests.Any(t => t.Result == TestModel.TestResults.Fail))
            {
                sdkTestResult = TestModel.TestResults.Fail;
            }
            // </- Tests result -->

            // <-- Test message -->
            var message = "";
            if (sdkTestResult == TestModel.TestResults.Passed)
            {
                message = "Ok";
            }
            else
            {
                var failedTest = tests.First(t => t.Result == TestModel.TestResults.Fail);
                message = $"{failedTest.Name}: {failedTest.Message}";
            }
            // </- Test message -->

            return new TestModel(
                "SDK tests",
                message,
                sdkTestResult,
                tests
            );
        }


        private readonly string _updatedPostfix = "_Updated";
        private string _GenerateName(string prefix) => $"{prefix}_{Guid.NewGuid().ToString().Replace("-", "").Substring(25)}";

        private TestModel _ItemTest()
        {
            // <-- Add Item -->
            var item = new Item
            {
                Name = _GenerateName("Item"),

                IncomeAccountRef = new ReferenceType
                {
                    Value = "79"
                },
                ExpenseAccountRef = new ReferenceType
                {
                    Value = "80"
                },
                AssetAccountRef = new ReferenceType
                {
                    Value = "81"
                },

                Type = ItemTypeEnum.Inventory,
                TypeSpecified = true,

                QtyOnHand = 10,
                QtyOnHandSpecified = true,

                TrackQtyOnHand = true,
                TrackQtyOnHandSpecified = true,

                PurchaseCost = 35,
                PurchaseCostSpecified = true,

                InvStartDate = DateTime.Parse("2016-01-01"),
                InvStartDateSpecified = true,

                PurchaseDesc = "desc"
            };
            try
            {
                item = _syncService.AddItem(item);
                if (item == null)
                {
                    throw new Exception("_syncService.AddItem() returned null");
                }
            }
            catch (Exception ex)
            {
                return new TestModel("Add Item", ex.Message, TestModel.TestResults.Fail);
            }
            // </- Add Item -->

            // <-- Read Item -->
            try
            {
                item = _syncService.GetItemById(item.Id);
                if (item == null)
                {
                    throw new Exception("Cannot find new Item");
                }
            }
            catch (Exception ex)
            {
                return new TestModel("Read Item", ex.Message, TestModel.TestResults.Fail);
            }
            // </- Read Item -->

            // <-- Update Item -->
            try
            {
                if (item == null)
                {
                    throw new Exception("Wrong preconditions: item is null");
                }
                if (item.Name.EndsWith(_updatedPostfix))
                {
                    throw new Exception("Wrong preconditions: GivenName ends with 'Updated'");
                }

                item.Name += _updatedPostfix;

                item = _syncService.UpdateItem(item);

                if (item == null)
                {
                    throw new Exception("UpdateItem returned null");
                }
                if (!item.Name.EndsWith("Updated"))
                {
                    throw new Exception("Cannot update item");
                }
            }
            catch (Exception ex)
            {
                return new TestModel("Update Item", ex.Message, TestModel.TestResults.Fail);
            }
            // </- Update Item -->

            return new TestModel("Item", "Ok", TestModel.TestResults.Passed);
        }
        private TestModel _EmployeeTest()
        {
            // <-- Add Employee -->
            var employee = new Employee
            {
                Active = true,
                ActiveSpecified = true,
                GivenName = _GenerateName("GivenName"),
                FamilyName = _GenerateName("FamilyName")
            };
            try
            {
                employee = _syncService.AddEmployee(employee);
                if (employee == null)
                {
                    throw new Exception("_syncService.AddEmployee() returned null");
                }
            }
            catch (Exception ex)
            {
                return new TestModel("Add Employee", ex.Message, TestModel.TestResults.Fail);
            }
            // </- Add Employee -->

            // <-- Read TimeActivity -->
            try
            {
                employee = _syncService.GetEmployeeById(employee.Id);
                if (employee == null)
                {
                    throw new Exception("Cannot find new Employee");
                }
            }
            catch (Exception ex)
            {
                return new TestModel("Read Employee", ex.Message, TestModel.TestResults.Fail);
            }
            // </- Read TimeActivity -->

            // <-- Update TimeActivity -->
            try
            {
                if (employee == null)
                {
                    throw new Exception("Wrong preconditions: employee is null");
                }
                if (employee.GivenName.EndsWith(_updatedPostfix))
                {
                    throw new Exception("Wrong preconditions: GivenName ends with 'Updated'");
                }

                employee.GivenName += _updatedPostfix;
                employee.DisplayName = $"{employee.GivenName} {employee.FamilyName}";

                employee = _syncService.UpdateEmployee(employee);

                if (employee == null)
                {
                    throw new Exception("UpdateEmployee returned null");
                }
                if (!employee.GivenName.EndsWith("Updated"))
                {
                    throw new Exception("Cannot update employee");
                }
            }
            catch (Exception ex)
            {
                return new TestModel("Update Employee", ex.Message, TestModel.TestResults.Fail);
            }
            // </- Update TimeActivity -->

            return new TestModel("Employee", "Ok", TestModel.TestResults.Passed);
        }
        private TestModel _CustomerTest()
        {
            // <-- Add Customer -->
            var customer = new Customer
            {
                Active = true,
                ActiveSpecified = true,
                GivenName = _GenerateName("Cust"),
                FamilyName = _GenerateName("Cust"),
                // <-- SubCustomer -->
                //Job = true,
                //JobSpecified = true
                // </- SubCustomer -->
            };
            try
            {
                customer = _syncService.AddCustomer(customer);
                if (customer == null)
                {
                    throw new Exception("_syncService.AddCustomer() returned null");
                }
            }
            catch (Exception ex)
            {
                return new TestModel("Add Customer", ex.Message, TestModel.TestResults.Fail);
            }
            // </- Add Customer -->

            // <-- Read Customer -->
            try
            {
                customer = _syncService.GetCustomerById(customer.Id);
                if (customer == null)
                {
                    throw new Exception("Cannot find new Customer");
                }
            }
            catch (Exception ex)
            {
                return new TestModel("Read Customer", ex.Message, TestModel.TestResults.Fail);
            }
            // </- Read Customer -->

            // <-- Update Customer -->
            try
            {
                if (customer == null)
                {
                    throw new Exception("Wrong preconditions: customer is null");
                }
                if (customer.GivenName.EndsWith("Updated"))
                {
                    throw new Exception("Wrong preconditions: GivenName ends with 'Updated'");
                }

                customer.GivenName += _updatedPostfix;
                customer.DisplayName = $"{customer.GivenName} {customer.FamilyName}";

                customer = _syncService.UpdateCustomer(customer);

                if (customer == null)
                {
                    throw new Exception("UpdateCustomer returned null");
                }
                if (!customer.GivenName.EndsWith(_updatedPostfix))
                {
                    throw new Exception("Cannot update customer");
                }
            }
            catch (Exception ex)
            {
                return new TestModel("Update Customer", ex.Message, TestModel.TestResults.Fail);
            }
            // </- Update Customer -->

            return new TestModel("Customer", "Ok", TestModel.TestResults.Passed);
        }
        private TestModel _TimeActivityTest()
        {
            // <-- Add Custom Field Definition -->
            //_syncService.AddCustomFieldToTimeActivity();
            //return new TestModel("TimeActivity", "Ok", TestModel.TestResults.Passed);

            //IEnumerable<CustomFieldDefinition> custDefs = _dataService.FindAll(new StringTypeCustomFieldDefinition());
            // </- Add Custom Field Definition -->


            // <-- Add TimeActivity -->

            var timeActivity = new TimeActivity
            {
                // <-- Required fields -->
                NameOf = TimeActivityTypeEnum.Employee,
                NameOfSpecified = true,

                AnyIntuitObject = new ReferenceType
                {
                    type = "Employee",
                    Value = "55"
                },

                EndTimeSpecified = true,
                StartTimeSpecified = true,
                EndTime = DateTime.Parse("2016-01-11T10:00:00"),
                StartTime = DateTime.Parse("2016-01-11T09:00:00"),
                // </- Required fields -->

                Description = "SDK Test",
                BillableStatus = BillableStatusEnum.NotBillable,

                //CustomField = new CustomField[] { new CustomField {
                //    DefinitionId = "1",
                //    Type = CustomFieldTypeEnum.StringType,
                //    Name = "CustomField",
                //    AnyIntuitObject = "value"
                //}},
            };
            try
            {
                timeActivity = _syncService.AddTimeActivity(timeActivity);
                if (timeActivity == null)
                {
                    throw new Exception("_syncService.AddTimeActivity() returned null");
                }
            }
            catch (Exception ex)
            {
                return new TestModel("Add TimeActivity", ex.Message, TestModel.TestResults.Fail);
            }
            // </- Add TimeActivity -->

            // <-- Read TimeActivity -->
            try
            {
                timeActivity = _syncService.GetTimeActivityById(timeActivity.Id);
                if (timeActivity == null)
                {
                    throw new Exception("Cannot find new TimeActivity");
                }
            }
            catch (Exception ex)
            {
                return new TestModel("Read TimeActivity", ex.Message, TestModel.TestResults.Fail);
            }
            // </- Read TimeActivity -->

            // <-- Update TimeActivity -->
            try
            {
                if (timeActivity == null)
                {
                    throw new Exception("Wrong preconditions: timeActivity is null");
                }
                if (timeActivity.BillableStatus != BillableStatusEnum.NotBillable)
                {
                    throw new Exception("Wrong preconditions: BillableStatus != NotBillable");
                }

                timeActivity.BillableStatusSpecified = true;
                timeActivity.BillableStatus = BillableStatusEnum.Billable;
                timeActivity.CustomerRef = new ReferenceType
                {
                    Value = "1"
                };

                timeActivity = _syncService.UpdateTimeActivity(timeActivity);

                if (timeActivity == null)
                {
                    throw new Exception("UpdateTimeActivity returned null");
                }
                if (timeActivity.BillableStatus != BillableStatusEnum.Billable)
                {
                    throw new Exception("Cannot update TimeActivity");
                }
            }
            catch (Exception ex)
            {
                return new TestModel("Update TimeActivity", ex.Message, TestModel.TestResults.Fail);
            }
            // </- Update TimeActivity -->

            // <-- Delete TimeActivity -->
            try
            {
                timeActivity = _syncService.DeleteTimeActivity(timeActivity);
                if (timeActivity == null)
                {
                    throw new Exception("DeleteTimeActivity returned null");
                }

                timeActivity = _syncService.GetTimeActivityById(timeActivity.Id);
                if (timeActivity != null)
                {
                    throw new Exception("TimeActivity was not deleted");
                }
            }
            catch (IdsException ex) when
                (
                    (ex.InnerException != null && ex.InnerException is ValidationException) &&
                    (ex.InnerException as ValidationException).InnerExceptions[0].Detail.Contains("has been deleted")
                )
            {
                return new TestModel("TimeActivity", "Ok", TestModel.TestResults.Passed);
            }
            catch (Exception ex)
            {
                return new TestModel("Delete TimeActivity", ex.Message, TestModel.TestResults.Fail);
            }
            // </- Delete TimeActivity -->

            return new TestModel("TimeActivity", "Ok", TestModel.TestResults.Passed);
        }
    }
}

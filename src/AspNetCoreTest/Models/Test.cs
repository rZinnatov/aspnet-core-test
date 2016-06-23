using System.Collections.Generic;

namespace ATQB.WebApp.Models
{
    public class Test
    {
        public enum TestResults
        {
            Passed,
            Fail
        }

        public string Name { get; set; }
        public string Message { get; set; }
        public TestResults Result { get; set; }
        public IEnumerable<Test> NestedTests { get; set; }

        public Test(string name, string message, TestResults result)
            : this(name, message, result, new Test[0])
        {

        }
        public Test(string name, string message, TestResults result, IEnumerable<Test> nestedTests)
        {
            Name = name;
            Message = message;
            Result = result;
            NestedTests = nestedTests;
        }
    }
}

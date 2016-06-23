using System.Collections.Generic;

namespace ATQB.WebApp.Models.Import
{
    public class Task
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class HierarchicalTask : Task
    {
        public IEnumerable<Task> SubTasks { get; set; }
    }
}

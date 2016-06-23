namespace ATQB.WebApp.Models.AT
{
    public class Project
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public string Name { get; set; }
        public bool Archived { get; set; }
    }
}

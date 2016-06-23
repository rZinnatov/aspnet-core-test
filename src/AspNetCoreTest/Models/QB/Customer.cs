namespace ATQB.WebApp.Models.QB
{
    public class Customer
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string ParentId { get; set; }
        public bool IsSubCustomer { get; set; }
    }
}

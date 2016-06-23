namespace ATQB.WebApp.Util.Connectors.AT.Data
{
    public class Request
    {
        public string Method { get; set; }
        public object[] Params { get; set; }

        public Request()
            : this("", new object[0])
        {
        }
        public Request(string method)
            : this(method, new object[0])
        {
        }
        public Request(string method, object[] parameters)
        {
            Method = method;
            Params = parameters;
        }
    }
}

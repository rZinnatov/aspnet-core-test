namespace ATQB.WebApp.Util.Settings
{
    public class Serilog
    {
        public string LogFilePathFormat { get; set; }
        public string LogRecordFormat { get; set; }
        public string MinLogLevel { get; set; }
        public long FileSizeLimitBytes { get; set; }
    }
}

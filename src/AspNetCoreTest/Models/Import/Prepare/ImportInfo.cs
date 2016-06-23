namespace ATQB.WebApp.Models.Import.Prepare
{
    public class ImportInfo
    {
        public int TotalMinutes { get; set; }
        public int TotalCorrectionMinutes { get; set; }
        public NewRecords NewRecords { get; set; }
        public Util.Services.TimeTrackCompressionService.TTSummary TTSummary { get; set; }
    }
}

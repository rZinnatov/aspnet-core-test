using System.Collections.Generic;

namespace ATQB.WebApp.Models.QB
{
    public class TTSummary
    {
        public IEnumerable<Record> NewTT { get; set; }
        public IEnumerable<Record> AdditiveTT { get; set; }
        public IEnumerable<Record> SubstractiveTT { get; set; }
    }
}

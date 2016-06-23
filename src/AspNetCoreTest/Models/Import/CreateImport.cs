namespace ATQB.WebApp.Models.Import
{
    public class CreateImport
    {
        /// <summary>
        /// Id of import. If <code>IsAnotherImportStarted</code> is <code>true</code> the state is undefined.
        /// </summary>
        public int ImportId { get; set; }
        public bool IsActive { get; set; }
        public bool IsAnotherImportStarted { get; set; }
    }
}

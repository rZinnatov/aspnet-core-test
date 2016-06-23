namespace ATQB.WebApp.Util.Connectors.AT.Enums
{
    public class ActiTimeRpcMethods
    {
        public const string Login = "LoginService.login";
        public const string Logout = "LoginService.logout";
        public const string GetChallenge = "LoginService.getChallenge";
        public const string GetUserTimeTrack = "QBService_v1.getUserTimeTrack";
        public const string GetUsersToImport = "QBService_v1.getUsersToImport";
        public const string GetUsersInfoWithDuplicates = "QBService_v1.getUsersInfoWithDuplicates";

        public const string GetUsers = "QBIntegrator_v1.getUsersSelectorData";
        public const string GetCustomersProjects = "QBIntegrator_v1.getCustomersProjectsSelectorData";
        public const string GetTimeTrackData = "QBIntegrator_v1.getTimeTrackData";
    }
}



namespace Services
{
    public interface IPermissionService
    {
        bool CheckSelfPermission(string permission);
        void RequestPermissions(string permission, int requestCode);
    }

    public class PermissionService : IPermissionService
    {
        public bool CheckSelfPermission(string permission)
        {
            // Implement the logic to check if a permission is denied
            // For demonstration purposes, assume the permission is always denied
            return true;
        }

        public void RequestPermissions(string permission, int requestCode)
        {
            // Implement the logic to request a permission
            // For demonstration purposes, assume the permission is always requested
        }

        public void RequestPostNotificationsPermission()
        {
            RequestPermissions("Manifest.Permission.PostNotifications", 0);
        }
    }
}
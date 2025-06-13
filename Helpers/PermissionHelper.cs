

namespace Helpers
{
    using System;
    using System.Runtime.InteropServices;
    using System.Security;
    using System.Security.Permissions;

    public class PermissionHelper
    {
        [DllImport("libc")]
        private static extern int access(string pathname, int mode);

        public bool CheckSelfPermission(string permission)
        {
            try
            {
                var permissionAttribute = (SecurityPermissionAttribute)typeof(PermissionHelper).GetCustomAttributes(typeof(SecurityPermissionAttribute), false).GetValue(0);
                if (permissionAttribute.Flags == SecurityPermissionFlag.UnmanagedCode)
                {
                    return access(permission, 0) == 0;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred while checking permission: {ex.Message}");
            }

            return false;
        }

        public void RequestPermissions(string permission, int requestCode)
        {
            try
            {
                var permissionAttribute = (SecurityPermissionAttribute)typeof(PermissionHelper).GetCustomAttributes(typeof(SecurityPermissionAttribute), false).GetValue(0);
                if (permissionAttribute.Flags == SecurityPermissionFlag.UnmanagedCode)
                {
                    if (requestCode == 0 && permission == "Manifest.Permission.PostNotifications")
                    {
                        // Implementation to request the Manifest.Permission.PostNotifications permission
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred while requesting permission: {ex.Message}");
            }
        }
    }
}
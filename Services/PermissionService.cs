

namespace Services
{
    using Android.App;
    using Android.Content;
    using Android.Content.PM;
    using Android.OS;

    public interface IPermissionService
    {
        bool CheckSelfPermission(string permission);
        void RequestPermissions(string permission, int requestCode);
    }

    public class PermissionService : IPermissionService
    {
        private readonly Activity _activity;

        public PermissionService(Activity activity)
        {
            _activity = activity;
        }

        public bool CheckSelfPermission(string permission)
        {
            return _activity.CheckSelfPermission(permission) == Permission.Denied;
        }

        public void RequestPermissions(string permission, int requestCode)
        {
            _activity.RequestPermissions(new[] { permission }, requestCode);
        }
    }
}
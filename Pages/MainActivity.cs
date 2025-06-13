

namespace MyApp.Pages
{
    using Android.App;
    using Android.Content;
    using Android.Content.PM;
    using Android.OS;
    using Android.Support.V4.App;
    using Android.Support.V4.Content;
    using Android.Util;
    using Android.Widget;
    using Microsoft.Extensions.Options;

    [Activity(Label = "MyApp", Icon = "@mipmap/icon", Theme = "@style/MainTheme", MainLauncher = true, ConfigurationChanges = ConfigChanges.ScreenSize | ConfigChanges.Orientation)]
    public class MainActivity : Page
    {
        private readonly PermissionHelper _permissionHelper;
        private readonly NotificationChannelHelper _notificationChannelHelper;
        private readonly IntentExtrasHelper _intentExtrasHelper;
        private readonly IOptions<ApplicationSettings> _applicationSettings;

        public MainActivity(PermissionHelper permissionHelper, NotificationChannelHelper notificationChannelHelper, IntentExtrasHelper intentExtrasHelper, IOptions<ApplicationSettings> applicationSettings)
        {
            _permissionHelper = permissionHelper;
            _notificationChannelHelper = notificationChannelHelper;
            _intentExtrasHelper = intentExtrasHelper;
            _applicationSettings = applicationSettings;
        }

        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);

            if (savedInstanceState != null)
            {
                // Handle saved instance state
            }

            if (!_permissionHelper.HasPermission(Android.Manifest.Permission.PostNotifications))
            {
                _permissionHelper.RequestPermission(Android.Manifest.Permission.PostNotifications);
            }
            else
            {
                if (Build.VERSION.SdkInt >= BuildVersionCodes.O)
                {
                    var channel = _notificationChannelHelper.CreateNotificationChannel("default", "Default Channel", NotificationImportance.Default);
                    var notificationManager = (NotificationManager)GetSystemService(NotificationService);
                    notificationManager.CreateNotificationChannel(channel);
                }

                SetContentView(Resource.Layout.activity_main);

                if (Intent.Extras != null)
                {
                    _intentExtrasHelper.HandleIntentExtras(Intent.Extras);
                }
            }
        }

        public override void OnRequestPermissionsResult(int requestCode, string[] permissions, Permission[] grantResults)
        {
            base.OnRequestPermissionsResult(requestCode, permissions, grantResults);

            if (requestCode == 1 && grantResults.Length > 0 && grantResults[0] == Permission.Granted)
            {
                // Handle permission granted
            }
            else
            {
                // Handle permission denied
            }
        }
    }
}
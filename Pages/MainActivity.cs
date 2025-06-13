

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
        private readonly PermissionService _permissionService;
        private readonly NotificationChannelService _notificationChannelService;
        private readonly IntentExtrasService _intentExtrasService;
        private readonly IOptions<ApplicationSettings> _applicationSettings;

        public MainActivity(PermissionService permissionService, NotificationChannelService notificationChannelService, IntentExtrasService intentExtrasService, IOptions<ApplicationSettings> applicationSettings)
        {
            _permissionService = permissionService;
            _notificationChannelService = notificationChannelService;
            _intentExtrasService = intentExtrasService;
            _applicationSettings = applicationSettings;
        }

        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);

            if (savedInstanceState != null)
            {
                HandleSavedInstanceState(savedInstanceState);
            }

            if (!_permissionService.HasPermission(Android.Manifest.Permission.PostNotifications))
            {
                _permissionService.RequestPermission(Android.Manifest.Permission.PostNotifications);
            }
            else
            {
                if (Build.VERSION.SdkInt >= BuildVersionCodes.O)
                {
                    var channel = _notificationChannelService.CreateNotificationChannel("default", "Default Channel", NotificationImportance.Default);
                    var notificationManager = (NotificationManager)GetSystemService(NotificationService);
                    notificationManager.CreateNotificationChannel(channel);
                }

                SetContentView(Resource.Layout.activity_main);

                if (Intent.Extras != null)
                {
                    HandleIntentExtras(Intent.Extras);
                }
            }
        }

        private void HandleSavedInstanceState(Bundle savedInstanceState)
        {
            // Handle saved instance state
        }

        public override void OnRequestPermissionsResult(int requestCode, string[] permissions, Permission[] grantResults)
        {
            base.OnRequestPermissionsResult(requestCode, permissions, grantResults);

            if (requestCode == 1 && grantResults.Length > 0 && grantResults[0] == Permission.Granted)
            {
                HandlePermissionGranted();
            }
            else
            {
                HandlePermissionDenied();
            }
        }

        private void HandlePermissionGranted()
        {
            // Handle permission granted
        }

        private void HandlePermissionDenied()
        {
            // Handle permission denied
        }

        private void HandleIntentExtras(Bundle extras)
        {
            _intentExtrasService.HandleIntentExtras(extras);
        }
    }
}
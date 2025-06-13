

namespace Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Services;

    public class MainActivity : Controller
    {
        private readonly NotificationChannelService _notificationChannelService;
        private readonly PermissionService _permissionService;
        private readonly IntentExtraService _intentExtraService;

        public MainActivity(NotificationChannelService notificationChannelService, PermissionService permissionService, IntentExtraService intentExtraService)
        {
            _notificationChannelService = notificationChannelService;
            _permissionService = permissionService;
            _intentExtraService = intentExtraService;
        }

        public IActionResult OnCreate()
        {
            if (!_permissionService.HasPostNotificationsPermission())
            {
                _permissionService.RequestPostNotificationsPermission();
            }

            if (OperatingSystem.IsAndroidVersionAtLeast(26))
            {
                _notificationChannelService.CreateNotificationChannel("channel_id", "channel_name", NotificationImportance.Default);
            }

            _intentExtraService.HandleIntentExtras();

            return View("activity_main");
        }

        public IActionResult OnResume()
        {
            if (HttpContext.Request.HasFormContentType && HttpContext.Request.Form.ContainsKey("NavigationID"))
            {
                var navigationID = HttpContext.Request.Form["NavigationID"].ToString();
                // Store the retrieved value in Preferences
                // ...
            }

            return View();
        }
    }
}
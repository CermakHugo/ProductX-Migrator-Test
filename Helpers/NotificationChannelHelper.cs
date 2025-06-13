

namespace Helpers
{
    using Android.App;
    using Android.Media;

    public class NotificationChannelHelper
    {
        public void CreateNotificationChannel(string channelId, string channelName, NotificationImportance importance)
        {
            if (Build.VERSION.SdkInt >= BuildVersionCodes.O)
            {
                var channel = new NotificationChannel(channelId, channelName, importance);
                var notificationManager = (NotificationManager)Application.Context.GetSystemService(NotificationService);
                notificationManager.CreateNotificationChannel(channel);
            }
        }
    }
}
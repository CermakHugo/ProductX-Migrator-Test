

namespace Services
{
    public class NotificationChannelService : INotificationChannelService
    {
        private readonly NotificationManager _notificationManager;

        public NotificationChannelService(NotificationManager notificationManager)
        {
            _notificationManager = notificationManager;
        }

        public void CreateNotificationChannel(string id, string name)
        {
            var notificationChannel = _notificationManager.CreateNotificationChannel(id);
            notificationChannel.Name = name;
            notificationChannel.Importance = NotificationImportance.Default;
        }
    }
}
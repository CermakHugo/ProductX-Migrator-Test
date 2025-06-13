

namespace Services
{
    public class NotificationChannelService : INotificationChannelService
    {
        private readonly NotificationManager _notificationManager;

        public NotificationChannelService(NotificationManager notificationManager)
        {
            _notificationManager = notificationManager ?? throw new ArgumentNullException(nameof(notificationManager));
        }

        public void CreateNotificationChannel(string id, string name, NotificationImportance importance)
        {
            if (string.IsNullOrEmpty(id))
            {
                throw new ArgumentException("Channel ID cannot be null or empty.", nameof(id));
            }

            if (string.IsNullOrEmpty(name))
            {
                throw new ArgumentException("Channel name cannot be null or empty.", nameof(name));
            }

            try
            {
                var notificationChannel = _notificationManager.CreateNotificationChannel(id);
                notificationChannel.Name = name;
                notificationChannel.Importance = importance;
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("Failed to create notification channel.", ex);
            }
        }
    }
}


namespace Helpers
{
    using System;
    using System.Net.Http;
    using System.Threading.Tasks;
    using Newtonsoft.Json;

    public class NotificationChannelHelper
    {
        private readonly HttpClient _httpClient;

        public NotificationChannelHelper(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task CreateNotificationChannelAsync(string channelId, string channelName, NotificationImportance importance)
        {
            if (string.IsNullOrEmpty(channelId) || string.IsNullOrEmpty(channelName))
            {
                throw new ArgumentException("Channel ID and name cannot be null or empty.");
            }

            if (importance != NotificationImportance.Default)
            {
                throw new ArgumentException("Importance must be set to Default.");
            }

            var notificationChannel = new NotificationChannel(channelId, channelName, importance);
            var json = JsonConvert.SerializeObject(notificationChannel);
            var content = new StringContent(json, System.Text.Encoding.UTF8, "application/json");

            try
            {
                var response = await _httpClient.PostAsync("/api/notificationchannel", content);
                response.EnsureSuccessStatusCode();
            }
            catch (HttpRequestException ex)
            {
                throw new Exception("Failed to create notification channel.", ex);
            }
        }
    }

    public enum NotificationImportance
    {
        Default
    }

    public class NotificationChannel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public NotificationImportance Importance { get; set; }

        public NotificationChannel(string id, string name, NotificationImportance importance)
        {
            Id = id;
            Name = name;
            Importance = importance;
        }
    }
}
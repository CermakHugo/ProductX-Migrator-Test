

namespace MyApplication.Helpers
{
    using System;
    using System.Net.Http;
    using System.Text;
    using System.Threading.Tasks;
    using Newtonsoft.Json;

    public class IntentExtrasHelper
    {
        private readonly HttpClient _httpClient;

        public IntentExtrasHelper(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task HandleIntentExtras(IntentExtras intentExtras)
        {
            var json = JsonConvert.SerializeObject(intentExtras);
            var content = new StringContent(json, Encoding.UTF8, "application/json");

            var response = await _httpClient.PostAsync("/api/intentextras", content);

            if (response.IsSuccessStatusCode)
            {
                var responseBody = await response.Content.ReadAsStringAsync();
                var preferences = JsonConvert.DeserializeObject<Preferences>(responseBody);
                // Store the preferences
            }
        }
    }

    public class IntentExtras
    {
        public string Key { get; set; }
        public string Value { get; set; }
    }

    public class Preferences
    {
        public string Key { get; set; }
        public string Value { get; set; }
    }
}
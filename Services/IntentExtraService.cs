

namespace Services
{
    using Microsoft.Extensions.Configuration;
    using System;

    public class IntentExtraService
    {
        private readonly IConfiguration _configuration;

        public IntentExtraService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public void HandleIntentExtras(string key, string value)
        {
            if (key == "NavigationID")
            {
                var preferences = _configuration.GetSection("Preferences");
                preferences["NavigationID"] = value;
            }
        }
    }
}


namespace Helpers
{
    using Microsoft.AspNetCore.Http;
    using Microsoft.Extensions.Configuration;
    using System;
    using System.Collections.Generic;

    public class IntentHelper
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IConfiguration _configuration;

        public IntentHelper(IHttpContextAccessor httpContextAccessor, IConfiguration configuration)
        {
            _httpContextAccessor = httpContextAccessor;
            _configuration = configuration;
        }

        public void HandleIntentExtras()
        {
            var httpContext = _httpContextAccessor.HttpContext;
            if (httpContext != null && HasExtra(httpContext))
            {
                var extras = httpContext.Request.Query;
                foreach (var extra in extras)
                {
                    PutString(extra.Key, extra.Value);
                }
            }
        }

        public bool HasExtra(HttpContext httpContext)
        {
            return httpContext.Request.Query.Count > 0;
        }

        public void PutString(string key, string value)
        {
            var preferences = _configuration.GetSection("Preferences");
            preferences[key] = value;
        }
    }
}
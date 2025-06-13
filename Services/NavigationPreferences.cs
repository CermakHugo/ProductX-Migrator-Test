

namespace Services
{
    public interface INavigationPreferences
    {
        void SetValue(string key, string value);
        string GetValue(string key);
    }

    public class NavigationPreferences : INavigationPreferences
    {
        private readonly IConfiguration _configuration;

        public NavigationPreferences(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public void SetValue(string key, string value)
        {
            _configuration[key] = value;
        }

        public string GetValue(string key)
        {
            return _configuration[key];
        }
    }
}
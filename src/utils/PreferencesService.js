

namespace src.utils
{
    public class PreferencesService
    {
        private readonly IPreferences _preferences;

        public PreferencesService(IPreferences preferences)
        {
            _preferences = preferences ?? throw new ArgumentNullException(nameof(preferences));
        }

        public void SetValue(string key, string value)
        {
            if (string.IsNullOrEmpty(key))
            {
                throw new ArgumentException("Key cannot be null or empty", nameof(key));
            }

            if (string.IsNullOrEmpty(value))
            {
                throw new ArgumentException("Value cannot be null or empty", nameof(value));
            }

            _preferences.SetValue(key, value);
        }

        public string GetValue(string key)
        {
            if (string.IsNullOrEmpty(key))
            {
                throw new ArgumentException("Key cannot be null or empty", nameof(key));
            }

            return _preferences.GetValue(key);
        }
    }

    public interface IPreferences
    {
        void SetValue(string key, string value);
        string GetValue(string key);
    }
}
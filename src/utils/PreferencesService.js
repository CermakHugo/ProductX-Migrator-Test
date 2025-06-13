

namespace src.utils
{
    using System;
    using System.Security.Cryptography;
    using System.Text;
    using Microsoft.Extensions.Logging;

    public class PreferencesService
    {
        private readonly IPreferences _preferences;
        private readonly ILogger<PreferencesService> _logger;

        public PreferencesService(IPreferences preferences, ILogger<PreferencesService> logger)
        {
            _preferences = preferences ?? throw new ArgumentNullException(nameof(preferences));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
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

            try
            {
                _preferences.SetValue(key, Encrypt(value));
                _logger.LogInformation($"Value set for key: {key}");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error setting value for key: {key}");
                throw;
            }
        }

        public string GetValue(string key)
        {
            if (string.IsNullOrEmpty(key))
            {
                throw new ArgumentException("Key cannot be null or empty", nameof(key));
            }

            try
            {
                var encryptedValue = _preferences.GetValue(key);
                return Decrypt(encryptedValue);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error getting value for key: {key}");
                throw;
            }
        }

        private string Encrypt(string value)
        {
            using var sha256 = SHA256.Create();
            var bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(value));
            return Convert.ToBase64String(bytes);
        }

        private string Decrypt(string encryptedValue)
        {
            var bytes = Convert.FromBase64String(encryptedValue);
            using var sha256 = SHA256.Create();
            var decryptedBytes = sha256.ComputeHash(bytes);
            return Encoding.UTF8.GetString(decryptedBytes);
        }
    }

    public interface IPreferences
    {
        void SetValue(string key, string value);
        string GetValue(string key);
    }
}
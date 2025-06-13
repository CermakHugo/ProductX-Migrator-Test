

namespace src.utils
{
    public class IntentHandler
    {
        private readonly IPreferences _preferences;
        private readonly ILogger _logger;

        public IntentHandler(IPreferences preferences, ILogger logger)
        {
            _preferences = preferences;
            _logger = logger;
        }

        public void HandleNewIntent(Intent intent)
        {
            try
            {
                if (intent.HasExtra("NavigationID"))
                {
                    string navigationId = intent.GetStringExtra("NavigationID");

                    if (!string.IsNullOrEmpty(navigationId))
                    {
                        _preferences.Set("NavigationID", navigationId);
                        OnResume();
                    }
                    else
                    {
                        _logger.LogWarning("NavigationID is null or empty.");
                    }
                }
                else
                {
                    _logger.LogInformation("Intent does not contain NavigationID extra.");
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while handling the new intent.");
            }
        }

        private void OnResume()
        {
            try
            {
                // Implement OnResume logic here
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while calling OnResume.");
            }
        }
    }
}
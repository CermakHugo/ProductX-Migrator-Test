

namespace src.controllers
{
    public class OnResumeController
    {
        private readonly IPreferences _preferences;
        private readonly IAppState _appState;
        private readonly ILogger _logger;

        public OnResumeController(IPreferences preferences, IAppState appState, ILogger logger)
        {
            _preferences = preferences;
            _appState = appState;
            _logger = logger;
        }

        public void OnResume(int navigationId)
        {
            if (navigationId <= 0)
            {
                _logger.LogError($"Invalid navigation ID: {navigationId}");
                throw new ArgumentException("Invalid navigation ID", nameof(navigationId));
            }

            try
            {
                var storedValue = _preferences.GetStoredValue(navigationId);
                if (storedValue == null)
                {
                    _logger.LogError($"No stored value found for navigation ID: {navigationId}");
                    return;
                }

                _appState.UpdateState(storedValue);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error updating application state for navigation ID: {navigationId}");
                throw;
            }
        }
    }
}
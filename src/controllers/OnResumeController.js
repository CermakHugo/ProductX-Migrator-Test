

namespace src.controllers
{
    public class OnResumeController
    {
        private readonly IPreferences _preferences;
        private readonly IAppState _appState;

        public OnResumeController(IPreferences preferences, IAppState appState)
        {
            _preferences = preferences;
            _appState = appState;
        }

        public void OnResume(int navigationId)
        {
            if (navigationId <= 0)
            {
                throw new ArgumentException("Invalid navigation ID", nameof(navigationId));
            }

            try
            {
                var storedValue = _preferences.GetStoredValue(navigationId);
                _appState.UpdateState(storedValue);
            }
            catch (Exception ex)
            {
                // Log the exception
                throw;
            }
        }
    }
}


namespace Services
{
    public interface IIntentExtrasService
    {
        void HandleIntentExtras(Intent intent);
    }

    public class IntentExtrasService : IIntentExtrasService
    {
        private readonly IPreferences _preferences;

        public IntentExtrasService(IPreferences preferences)
        {
            _preferences = preferences;
        }

        public void HandleIntentExtras(Intent intent)
        {
            if (intent.HasExtra("NavigationID"))
            {
                var navigationId = intent.GetStringExtra("NavigationID");
                _preferences.PutString("NavigationID", navigationId);
            }
        }
    }
}
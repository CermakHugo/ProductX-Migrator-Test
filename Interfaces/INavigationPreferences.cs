

namespace Application.Interfaces
{
    public interface INavigationPreferences
    {
        void SetValue(string key, string value);
        string GetValue(string key);
    }
}
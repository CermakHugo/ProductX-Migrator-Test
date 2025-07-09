

namespace MauiApp.Services;

public class MauiAppFactory : IFactory<MauiApp>
{
    public MauiApp Create()
    {
        try
        {
            return new MauiApp();
        }
        catch (Exception ex)
        {
            // Implement logging mechanism here
            throw;
        }
    }
}

public interface IFactory<T>
{
    T Create();
}
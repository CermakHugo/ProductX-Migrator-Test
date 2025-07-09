

using System;
using Microsoft.Extensions.DependencyInjection;
using ObjCRuntime;
using UIKit;

namespace YourNamespace
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddTransient<UIApplicationDelegate>();
            services.AddTransient<UIWindow>();
        }

        public void Configure(IHost host)
        {
            var appDelegate = host.Services.GetService<UIApplicationDelegate>();
            var window = host.Services.GetService<UIWindow>();

            appDelegate.FinishedLaunching += (sender, e) => window.MakeKeyAndVisible();
        }
    }
}
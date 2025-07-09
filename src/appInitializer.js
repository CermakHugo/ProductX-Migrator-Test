

namespace AppInitializer
{
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Logging;
    using System;

    public class AppInitializer
    {
        private readonly IWebHostEnvironment _env;
        private readonly ILogger _logger;

        public AppInitializer(IWebHostEnvironment env, ILogger<AppInitializer> logger)
        {
            _env = env;
            _logger = logger;
        }

        public void InitializeApp(IApplicationBuilder app)
        {
            if (_env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }

    public static class AppInitializerExtensions
    {
        public static IApplicationBuilder UseAppInitializer(this IApplicationBuilder app)
        {
            var env = app.ApplicationServices.GetService<IWebHostEnvironment>();
            var logger = app.ApplicationServices.GetService<ILogger<AppInitializer>>();

            var appInitializer = new AppInitializer(env, logger);
            appInitializer.InitializeApp(app);

            return app;
        }
    }
}
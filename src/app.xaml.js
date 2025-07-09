

namespace App
{
    using System;
    using System.Windows;
    using System.Windows.Markup;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Logging;

    [System.Windows.Markup.XamlType]
    public partial class App : Application
    {
        private readonly ServiceProvider _serviceProvider;

        public App()
        {
            InitializeComponent();

            var services = new ServiceCollection();
            services.AddTransient<MainWindow>();
            services.AddLogging(loggingBuilder => loggingBuilder.AddConsole());

            _serviceProvider = services.BuildServiceProvider();
        }

        protected override void OnStartup(StartupEventArgs e)
        {
            base.OnStartup(e);

            var mainWindow = _serviceProvider.GetService<MainWindow>();
            mainWindow.Show();
        }
    }
}


using System;
using System.Windows.Forms;

namespace AppDelegate
{
    public class AppDelegate
    {
        private string[] args;

        public AppDelegate(string[] args)
        {
            this.args = args;
        }

        public void Run()
        {
            // Validate command-line arguments
            if (args == null || args.Length == 0)
            {
                throw new ArgumentException("Invalid command-line arguments");
            }

            // Initialize the application
            Initialize();

            // Start the main event loop
            StartEventLoop();
        }

        private void Initialize()
        {
            // Initialize the application's UI
            InitializeUI();

            // Register event handlers
            RegisterEventHandlers();
        }

        private void InitializeUI()
        {
            // Create the application's UI components
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
        }

        private void RegisterEventHandlers()
        {
            // Register event handlers for system events
            Application.ThreadException += Application_ThreadException;
            AppDomain.CurrentDomain.UnhandledException += CurrentDomain_UnhandledException;
        }

        private void StartEventLoop()
        {
            // Start the main event loop
            Application.Run();
        }

        private void Application_ThreadException(object sender, System.Threading.ThreadExceptionEventArgs e)
        {
            // Handle thread exceptions
            MessageBox.Show(e.Exception.Message, "Thread Exception", MessageBoxButtons.OK, MessageBoxIcon.Error);
        }

        private void CurrentDomain_UnhandledException(object sender, UnhandledExceptionEventArgs e)
        {
            // Handle unhandled exceptions
            MessageBox.Show(((Exception)e.ExceptionObject).Message, "Unhandled Exception", MessageBoxButtons.OK, MessageBoxIcon.Error);
        }
    }
}
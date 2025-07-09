

namespace MauiApp.Models
{
    public class MauiApp
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Version { get; set; }
        public string Description { get; set; }
        public string Publisher { get; set; }
        public string PublisherId { get; set; }
        public string ProductId { get; set; }
        public string Architecture { get; set; }
        public string ResourceLanguage { get; set; }
        public string PackageFamilyName { get; set; }
        public string PackageFullName { get; set; }
        public string InstallLocation { get; set; }
        public bool IsFramework { get; set; }
        public bool IsResourcePackage { get; set; }
        public bool IsBundle { get; set; }
        public bool IsDevelopmentMode { get; set; }
        public string PackageStatus { get; set; }
        public string PackageStatusDetail { get; set; }
    }
}
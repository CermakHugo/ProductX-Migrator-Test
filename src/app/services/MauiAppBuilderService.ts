

class MauiAppBuilderService {
  private static instance: MauiAppBuilderService;
  private rootApplication: any;
  private mauiAppBuilder: any;

  private constructor() {}

  public static getInstance(): MauiAppBuilderService {
    if (!MauiAppBuilderService.instance) {
      MauiAppBuilderService.instance = new MauiAppBuilderService();
    }
    return MauiAppBuilderService.instance;
  }

  public setRootApplication(rootApplication: any): void {
    this.rootApplication = rootApplication;
  }

  public getMauiAppBuilder(): any {
    return this.mauiAppBuilder;
  }

  public setMauiAppBuilder(mauiAppBuilder: any): void {
    this.mauiAppBuilder = mauiAppBuilder;
  }
}
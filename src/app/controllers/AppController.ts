

import { MauiProgramService } from './MauiProgramService';

class AppController {
  private mauiProgramService: MauiProgramService;

  constructor(mauiProgramService: MauiProgramService) {
    this.mauiProgramService = mauiProgramService;
  }

  public CreateMauiApp(): MauiApp {
    const mauiApp = this.mauiProgramService.CreateMauiApp();
    return mauiApp;
  }
}

export default AppController;
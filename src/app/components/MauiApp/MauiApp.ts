

import { MauiWinUIApplication } from './MauiWinUIApplication';
import { MauiProgram } from './MauiProgram';

class MauiApp extends MauiWinUIApplication {
  CreateMauiApp() {
    return MauiProgram.CreateMauiApp();
  }
}

export default MauiApp;
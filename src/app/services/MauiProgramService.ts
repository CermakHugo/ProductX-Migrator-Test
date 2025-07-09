

import { Injectable } from '@angular/core';
import { MauiApp } from './MauiApp';

@Injectable()
export class MauiProgramService {
  mauiApp: MauiApp;

  CreateMauiApp(): MauiApp {
    const mauiApp = new MauiApp();
    if (mauiApp) {
      return mauiApp;
    } else {
      throw new Error('Failed to create MauiApp instance');
    }
  }
}
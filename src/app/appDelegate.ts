

import React from 'react';
import { MauiApp } from './mauiApp';

class AppDelegate {
  constructor() {}

  CreateMauiApp() {
    return new MauiApp();
  }
}

export default AppDelegate;


import React, { Component } from 'react';
import { UIApplicationService } from './UIApplicationService';
import { MauiProgramService } from './MauiProgramService';
import { MauiApp } from './MauiApp';
import { AppShell } from './AppShell';

class App extends Component {
  constructor(props) {
    super(props);
    this.mauiAppInstance = null;
    this.appShellInstance = null;
    this.mauiApp = null;

    UIApplicationService.initializeApp();
    this.appShellInstance = UIApplicationService.createAppShell();
    this.mauiAppInstance = new MauiApp();
    this.mauiApp = this.mauiAppInstance;
  }

  render() {
    return (
      <this.mauiApp>
        <this.appShellInstance />
      </this.mauiApp>
    );
  }

  CreateMauiApp() {
    const mauiApp = MauiProgramService.CreateMauiApp();
    return mauiApp;
  }
}

export default App;


import React, { Component } from 'react';
import { MauiApp, MauiProgram, AppShell } from '@maui-kit/core';

class App extends Component {
  public CreateMauiApp(): MauiApp {
    try {
      const mauiApp = MauiProgram.CreateMauiApp();
      return mauiApp;
    } catch (error) {
      console.error('Error creating MauiApp instance:', error);
      return null;
    }
  }

  render() {
    const mauiApp = this.CreateMauiApp();
    if (!mauiApp) {
      return <div>Error creating MauiApp instance</div>;
    }

    return (
      <MauiApp>
        <AppShell />
      </MauiApp>
    );
  }
}

export default App;
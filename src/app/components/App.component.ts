

import React from 'react';
import { MauiProgram } from './MauiProgram';
import { MauiApp } from './MauiApp';

interface Props {
  mauiProgram: MauiProgram;
}

interface State {
  mauiApp: MauiApp | null;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      mauiApp: null,
    };
  }

  createMauiApp(): MauiApp {
    const mauiApp = this.props.mauiProgram.createMauiApp();
    this.setState({ mauiApp });
    return mauiApp;
  }

  render() {
    return (
      <div>
        {this.state.mauiApp && (
          <div>
            <h1>Maui App Created</h1>
            <p>Maui App: {this.state.mauiApp.toString()}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
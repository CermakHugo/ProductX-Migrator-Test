

import React, { Component } from 'react';
import AndroidNotificationService from './AndroidNotificationService';
import Resource from './Resource';

class MainActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentView: null
    };
  }

  onCreate = () => {
    AndroidNotificationService.createNotificationChannel();
    AndroidNotificationService.requestPostNotificationsPermission();
    AndroidNotificationService.processIntentExtras();
  };

  SetContentView = () => {
    this.setState({ contentView: Resource.Layout.activity_main });
  };

  componentDidMount() {
    this.onCreate();
    this.SetContentView();
  }

  render() {
    return (
      <div>
        {this.state.contentView === Resource.Layout.activity_main && (
          <div>
            <button onClick={this.onCreate}>Increment Counter</button>
          </div>
        )}
      </div>
    );
  }
}

export default MainActivity;
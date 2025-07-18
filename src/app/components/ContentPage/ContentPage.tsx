

import React, { Component } from 'react';

class ContentPageComponent extends Component {
  configuredElement;

  InitializeComponent() {
    this.configuredElement = (
      <div>
        <p>content-page works!</p>
      </div>
    );
  }

  getLayout() {
    return this.configuredElement;
  }

  getBehavior() {
    return this.configuredElement;
  }

  render() {
    this.InitializeComponent();
    return this.configuredElement;
  }
}

export default ContentPageComponent;
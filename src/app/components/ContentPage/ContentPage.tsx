

import React, { Component } from 'react';

class ContentPageComponent extends Component {
  configuredElement;

  InitializeComponent() {}

  render() {
    return (
      <div>
        <p>content-page works!</p>
        {this.configuredElement}
      </div>
    );
  }
}

export default ContentPageComponent;
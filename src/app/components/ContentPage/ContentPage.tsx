

import React, { Component } from 'react';
import LayoutService from '../LayoutService';

class ContentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.initializeContentPage();
  }

  initializeContentPage = () => {
    const configuration = this.props.configuration;
    const layout = this.props.layout;

    if (configuration && layout) {
      const elementsToConfigure = document.querySelectorAll('[data-configure]');
      elementsToConfigure.forEach((element) => {
        const configKey = element.getAttribute('data-configure');
        const configValue = configuration[configKey];
        if (configValue) {
          element.textContent = configValue;
        }
      });

      const layoutElements = document.querySelectorAll('[data-layout]');
      layoutElements.forEach((element) => {
        const layoutKey = element.getAttribute('data-layout');
        const layoutValue = layout[layoutKey];
        if (layoutValue) {
          element.style[layoutKey] = layoutValue;
        }
      });
    }
  };

  render() {
    return (
      <div>
        <h1 data-configure="title">Title</h1>
        <p data-configure="description">Description</p>
        <div data-layout="width" style={{ width: '100%' }}>
          <p>Content</p>
        </div>
      </div>
    );
  }
}

export default ContentPage;
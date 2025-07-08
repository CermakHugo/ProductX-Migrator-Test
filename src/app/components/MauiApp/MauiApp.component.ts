

import React, { Component } from 'react';

class MauiApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      backgroundColor: '',
      fontFamily: '',
      fontSize: 0
    };
  }

  initMauiApp(width, height, backgroundColor, fontFamily, fontSize) {
    this.setState({
      width,
      height,
      backgroundColor,
      fontFamily,
      fontSize
    });
  }

  render() {
    return (
      <div
        style={{
          width: this.state.width,
          height: this.state.height,
          backgroundColor: this.state.backgroundColor,
          fontFamily: this.state.fontFamily,
          fontSize: this.state.fontSize
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default MauiApp;
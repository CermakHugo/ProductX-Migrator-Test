

import React, { Component } from 'react';

class App extends Component {
  title: string;
  description: string;
  state: { title: string; description: string; };

  constructor(props) {
    super(props);
    this.title = '';
    this.description = '';
    this.state = {
      title: this.title,
      description: this.description
    };
  }

  updateTitleAndDescription = (event) => {
    const { name, value } = event.target;
    if (name === 'title') {
      this.title = value;
    } else if (name === 'description') {
      this.description = value;
    }
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.updateTitleAndDescription}
        />
        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.updateTitleAndDescription}
        />
      </div>
    );
  }
}

export default App;
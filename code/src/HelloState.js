import React, { Component } from "react";

class Hello extends Component {
  constructor(props) {
    super();
    this.state = {
      name: props.name || ""
    };
  }

  updateText = evt => {
    this.setState({ name: evt.target.value });
  };

  render() {
    return (
      <div>
        <p>Hello {this.state.name}</p>
        <input type="text" onChange={this.updateText} value={this.state.name} />
      </div>
    );
  }
}

export default Hello;

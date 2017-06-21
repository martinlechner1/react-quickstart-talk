import React, { Component } from "react";
import Hello from "./Hello";

class HelloState extends Component {
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
        <Hello name={this.state.name} />
        <input type="text" onChange={this.updateText} value={this.state.name} />
      </div>
    );
  }
}

export default HelloState;

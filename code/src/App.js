import React, { Component } from "react";
import Hello from "./HelloState";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello name="world" />
      </div>
    );
  }
}

export default App;

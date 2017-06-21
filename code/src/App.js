import React, { Component } from "react";
import styled from "styled-components";
import HelloState from "./HelloState";

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom:0;
  left: 0;
`;
class App extends Component {
  render() {
    return (
      <AppContainer>
        <HelloState />
      </AppContainer>
    );
  }
}

export default App;

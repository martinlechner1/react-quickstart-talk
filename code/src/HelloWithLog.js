import React from "react";
import logProps from "./logProps";

function Hello(props) {
  return <span>Hello {props.name}</span>;
}

const enhanced = logProps(Hello);

export default enhanced;

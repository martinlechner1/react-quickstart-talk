import React from "react";
import { Text } from "react-vr";

const fontStyle = {
  color: "#f07e07",
  backgroundColor: "transparent",
  fontSize: 0.5,
  fontWeight: "400",
  layoutOrigin: [0.5, 0.5],
  paddingLeft: 0.2,
  paddingRight: 0.2,
  textAlign: "center",
  textAlignVertical: "center",
  transform: [{ translate: [14, 0, -25] }]
};

export default class Jambit extends React.Component {
  render() {
    return (
      <Text style={fontStyle}>
        Jambit
      </Text>
    );
  }
}

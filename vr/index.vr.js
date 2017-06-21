import React from "react";
import { AppRegistry, asset, Pano, Text, View } from "react-vr";
import Jambit from "./Jambit";

export default class vr extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset("museum.jpg")} />
        <Jambit />
      </View>
    );
  }
}

AppRegistry.registerComponent("vr", () => vr);

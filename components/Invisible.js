import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import { vmin, vmax } from './../services/viewport';

export default class Invisible extends Component {
  render() {
    return (
      <View style={{ position: 'absolute', left: this.props.x, top: this.props.y * vmax }} >
        <Text style={{ width: this.props.width * vmin, height: this.props.height * vmax }} />
      </View>
    );
  }
}

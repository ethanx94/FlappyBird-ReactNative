import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';

import { vmin, vmax } from './../services/viewport';

export default class GameOver extends Component {
  render() {
    return (
      <View style={{ position: 'absolute', left: 25 * vmin, top: 30 * vmax }} >
        <Image
          resizeMode="stretch"
          source={require('./../images/flappybird_gameover.png')}
        />
      </View>
    );
  }
}

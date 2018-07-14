import React from 'react';
import { StyleSheet, View } from 'react-native';
import Game from './Game';
import FlappyProvider from './contexts/FlappyProvider';

const App = () => (
  <View style={styles.container}>
    <FlappyProvider>
      <Game />
    </FlappyProvider>
  </View>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

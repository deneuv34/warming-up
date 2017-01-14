/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class coba extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Image source={require('./img/1.jpg')} style={styles.foto}/>

        <Text style={styles.nama}>
          Rangga Adhitya Prawira
        </Text>

        <Text style={styles.instructions}>
          Refactory Batch 1
        </Text>
        <Text style={{fontSize: 20, fontWeight:'bold'}}>
          Camorra
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5f9ea0',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  nama: {
    fontSize: 17,
    textAlign: 'center',
    color: '#333333',
    fontWeight: 'bold'
  },
  foto: {
    height: 250,
    width: 175,
    borderRadius: 10,
    marginBottom: 12
  }
});

AppRegistry.registerComponent('coba', () => coba);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import MqttLog from './MqttLog';

export default class example extends Component {
  render() {
    return <MqttLog />;
  }
}

AppRegistry.registerComponent('example', () => example);

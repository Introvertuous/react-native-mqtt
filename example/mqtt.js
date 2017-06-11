import React, { Component } from 'react';
import { Text } from 'react-native';

import init from 'react_native_mqtt';
import { AsyncStorage } from 'react-native';

init({
  size: 10000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync : {
  }
});

export default class MQTT extends Component {
  constructor(props) {
    super(props);
    var client = new Paho.MQTT.Client('broker.hivemq.com', 8000, 'unique_client_name');

    client.connect({ onSuccess: this.onConnect });
    this.state = { message: '...' }
  }

  onConnect = () => {
    this.setState({ message: 'connected' });
  }

  render() {
    const { message } = this.state;

    return (
      <Text>{message}</Text>
    )
  }
}
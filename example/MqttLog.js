import React, { Component } from 'react';
import init from 'react_native_mqtt';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';

init({
  size: 10000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {},
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export default class MqttLog extends Component {
  constructor(props) {
    super(props);

    const client = new Paho.MQTT.Client('broker.hivemq.com', 8000, 'uname');
    client.onConnectionLost = this.onConnectionLost;
    client.onMessageArrived = this.onMessageArrived;
    client.connect({ onSuccess: this.onConnect });

    this.state = {
      text: ['...'],
      client,
    };
  }

  pushText = entry => {
    const { text } = this.state;
    this.setState({ text: [...text, entry] });
  };

  onConnect = () => {
    const { client } = this.state;
    client.subscribe('WORLD');
    this.pushText('connected');
  };

  onConnectionLost = responseObject => {
    if (responseObject.errorCode !== 0) {
      this.pushText(`connection lost: ${responseObject.errorMessage}`);
    }
  };

  onMessageArrived = message => {
    this.pushText(`new message: ${message.payloadString}`);
  };

  render() {
    const { text } = this.state;

    return (
      <View style={styles.container}>
        {text.map(entry => <Text>{entry}</Text>)}
      </View>
    );
  }
}

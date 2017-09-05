[![Build Status](https://travis-ci.org/Introvertuous/react-native-mqtt.svg?branch=master)](https://travis-ci.org/Introvertuous/react-native-mqtt)
[![npm version](https://badge.fury.io/js/react_native_mqtt.svg)](https://badge.fury.io/js/react_native_mqtt)

# React Native Mqtt

This package is a wrapper around the javascript implementation of the [paho mqtt client library](https://eclipse.org/paho/clients/js/) to provide drop in compatibility with react native. If you happen to be running your own mqtt broker, it must support websockets for a connection to be possible.

## Install

To install, use npm:

```
npm install react_native_mqtt --save
```

## Usage

To use the library just pass in the options for the local storage module ([react-native-storage](https://github.com/sunnylqm/react-native-storage)) and the paho object will be attached to global scope.
```javascript
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

function onConnect() {
  console.log("onConnect");
}

function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}

function onMessageArrived(message) {
  console.log("onMessageArrived:"+message.payloadString);
}

const client = new Paho.MQTT.Client('broker.hivemq.com', 8000, 'unique_client_name');
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;
client.connect({onSuccess:onConnect});
```

### Example

To run the example, first make sure you have properly setup your env for react native development in ios and/or android: https://facebook.github.io/react-native/releases/0.21/docs/getting-started.html.

Then start the tsc compiler to watch and re-build changes, start up the js packager, and run android or ios.
```
cd /react-native-mqtt/
npm install
npm run dev
```
```
cd /react-native-mqtt/example/
yarn
yarn start -- --reset-cache
react-native run-android OR react-native run-ios
```

Lastly, once you have the example running, you can use the following mqtt app to verify that everything works as expected by publishing a few messages to the "WORLD" topic: http://www.hivemq.com/demos/websocket-client/
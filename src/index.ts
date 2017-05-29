
import * as Storage from 'react-native-storage';
import './mqttws31';

export default function (options: object) {
  window = Object.assign({}, window, {
    localStorage: new Storage(options),
  });
}

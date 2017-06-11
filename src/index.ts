import Storage from 'react-native-storage';
import './mqttws31';

// remove this comment...
export default function initialize(options: object): void {
  localStorage = new Storage(options);
}




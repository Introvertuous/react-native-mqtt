import Storage from 'react-native-storage';
import './mqttws31';

/**
 * see https://github.com/sunnylqm/react-native-storage for more details
 * @param options {object}
 */
export default function init(options: object): void {
  localStorage = new Storage(options);
}

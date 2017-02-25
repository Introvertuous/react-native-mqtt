import Storage from 'react-native-storage';

export default (opts) => {
  window.localStorage = new Storage(opts);
  require('./mqttws31');
};

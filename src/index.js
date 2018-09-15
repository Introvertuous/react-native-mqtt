
Object.defineProperty(exports, "__esModule", { value: true });
const reactNativeStorage = require("react-native-storage");
require("./mqttws31");

/**
 * see https://github.com/sunnylqm/react-native-storage for more details
 * @param options {object}
 */

 function init(options) {
    localStorage = new reactNativeStorage.default(options);
}

exports.default = init;
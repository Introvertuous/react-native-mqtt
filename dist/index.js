Object.defineProperty(exports, "__esModule", { value: true });
const react_native_storage_1 = require("react-native-storage");
require("./mqttws31");
function init(options) {
    localStorage = new react_native_storage_1.default(options);
}
exports.default = init;

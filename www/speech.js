var exec = require('cordova/exec');
function Speech() {
        alert('created');
}

Speech.prototype.speak = function (text, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "ie.kevinboyle.cordova.speech", "speek", [text]);
};

module.exports = new Speech();

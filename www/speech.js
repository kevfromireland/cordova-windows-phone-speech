    var exec = require('cordova/exec');

    function Speech() {
    }

    Speech.prototype.speak = function (text, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "ie.kevinboyle.cordova.speech.Speech", "speak", [text]);
    };

    module.exports = new Speech();

var exec = require('cordova/exec');
function Speech() {
        alert('created');
}

Speech.prototype.speak = function (text, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "Speech", "speak", [text]);
};

module.exports = new Speech();

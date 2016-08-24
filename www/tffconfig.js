var exec = require('cordova/exec');

exports.TffConfig = function(arg0, success, error) {
    exec(success, error, "TffConfig", "tffconfig", [arg0]);
};

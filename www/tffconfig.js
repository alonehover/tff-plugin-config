var exec = require('cordova/exec');

module.exports = {
    channel : function(success, error) {
        exec(success, error, "TffConfig", "channel", []);
    }
};

cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.qdev.webintent.WebIntent",
        "file": "plugins/com.qdev.webintent/www/webintent.js",
        "pluginId": "com.qdev.webintent",
        "clobbers": [
            "WebIntent"
        ]
    },
    {
        "id": "com.borismus.webintent.WebIntent",
        "file": "plugins/com.borismus.webintent/www/webintent.js",
        "pluginId": "com.borismus.webintent",
        "clobbers": [
            "WebIntent"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "com.qdev.webintent": "1.0.1",
    "com.borismus.webintent": "1.1.0",
    "cordova-plugin-splashscreen": "4.0.3",
    "cordova-plugin-statusbar": "2.2.3"
};
// BOTTOM OF METADATA
});
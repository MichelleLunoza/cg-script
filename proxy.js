/*
    This script is for corsing the server for external API
    Note: change host to you server host
*/
var cors_proxy = require('cors-anywhere');
var ip = require('ip');
var host = ip.address();
var port = process.env.PORT || 8080;

cors_proxy.createServer({
    originWhitelist: [],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Successfully running cors on ' + host + ':' + port);
});
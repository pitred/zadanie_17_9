var fs = require('fs');

exports.upload = function (request, response) {
    console.log('Starting file upload support.');
    response.write('Starting upload!');
    response.end();
}
exports.welcome = function (request, response) {
    console.log('Starting welcome support.');
    fs.readFile('templates/start.html', function (err, html) {
        response.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        response.write(html);
        response.end();
    });
}
exports.error = function (request, response) {
    console.log("I don't know what to do.");
    response.write('404 :(');
    response.end();
}
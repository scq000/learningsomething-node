var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile('hello-world.js', 'utf8', function(err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        if (err)
            res.write('Could not find the file');
        else
            res.write(data);
        res.end();
    });
}).listen(7000, function() {
    console.log('Server is running on port 7000')
});

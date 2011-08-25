var http = require('http'),
		fs = require('fs'),
		lolz = []

http.createServer(function(req, res){
	var contentType, data;
	switch(req.url){
		case '/':
			contentType = {'Content-Type': 'text/html'}
			data = fs.readFileSync('./index.html', 'utf8')
			break
		case '/getMessages.json':
			contentType = {'Content-Type': 'application/json'}
			data = JSON.stringify(lolz)
			break
		case '/favicon.ico': break
		default :
			contentType = {'Content-Type' : 'text/plain'}
			lolz.push(decodeURIComponent(req.url.substr(1)))
			data = JSON.stringify(lolz)
			break
	}
	
	res.writeHead(200, contentType)
	res.end(data)
	
}).listen(5000)
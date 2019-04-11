const fs = require('fs'); // import fs (filesystem) to read and write files in computer

const requestHandler = (req, res) => {
	//create a server
	const url = req.url; // '/'
	const method = req.method; //'GET'
	if (url === '/') {
		// write response body
		res.write('<html>');
		res.write('<head><title>Enter Message</title><head>');
		res.write(
			'<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
		);
		res.write('</html>');
		return res.end(); // end response body and return to exit funtion
	}
	if (url === '/message' && method === 'POST') {
		// case form submit
		const body = [];
		req.on('data', (chunk) => {
			// parse incoming data
			console.log(chunk);
			body.push(chunk); // push all chunks to body array
		});
		req.on('end', () => {
			// when the post method ends
			const parsedBody = Buffer.concat(body).toString(); // parse binary code and save copy
			const message = parsedBody.split('=')[1]; //split value pair -> message=Hello ['message', 'Hello']
			fs.writeFileSync('message.txt', message);
		});
		res.statusCode = 302; // redirection
		res.setHeader('Location', '/');
		return res.end();
	}
	res.setHeader('Content-Type', 'text/html');
	res.write('<html>');
	res.write('<head><title>My First Page</title><head>');
	res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
	res.write('</html>');
	res.end();
};

module.exports = requestHandler;

var fs = require('fs');
var http = require('http');
var video = './190404_05_Skiing_HD_01.mp4';

http.createServer((req,res) => {
	
	res.writeHeader(200, {'Content-Type': 'video/mp4'});
	
	fs.createReadStream(video)
	.pipe(res)
	.on('error',console.error);
	
}).listen(3000,() => console.log('video streaming from http://localhost:3000'));
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(8000)

console.log('Server started at http://localhost:3000')
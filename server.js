// const http = require('http');

// const server = http.createServer((request, response) =>{
//     response.setHeader('Content-Type', 'text/html');
//     response.end('<h1>HI!!!</h1>');
// })

// server.listen(3000);

const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.get('/', (req, res) =>{
    res.send("<h1>Hello!</h1>");
})

app.listen(3000);
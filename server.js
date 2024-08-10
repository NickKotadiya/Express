const express = require('express');
const server = express();   // create server
// const data = require('./friend.json');
const fs = require('fs');
const data = fs.readFileSync('./friend.json', 'utf8');
// console.log(data);

// POST, GET PUT, PATCH, DELETE
server.get('/', (req, res) => {
    res.write('Welcome to Express');
    res.end();
})

// server.get('/', (req, res) => {
//     res.write('Get Method - 1');
//     res.end();
// })

server.post('/', (req, res) => {
    // res.write('Welcome to Post Method');
    res.send('Welcome to Post Method');
})

server.put('/', (req, res) => {
    res.json({msg:'Hello Put Method Called'});
})

server.patch('/', (req, res) => {
    res.status(400);
    res.json({msg:'Hello Patch Method Called'});
})

server.get('/user', (req, res) => {
    res.json(JSON.parse(data));
})

server.get('/login', (req, res) => {
    res.json({msg:'Welcome to Login Page'});
    res.end();
})


server.listen(8000, () => {
    console.log('Server Start at http://localhost:8000');
});
const express = require('express');
const server = express();   // create server
const data = require('./friend.json');
const fs = require('fs');
const data = fs.readFileSync('./friend.json', 'utf-8');
// console.log(data);

const myFun = (req, res, next) =>{
    // console.log(req.query);
    if(req.query.age >= 18){
        console.log('Success');
        next();
    }else{
        res.Json({message: "Sorry you are not allowed to visit this website ..."})
    }
}

// server.use(myFun);  // application

// POST, GET PUT, PATCH, DELETE
// server.get('/', (req, res) => {
//     res.write('Welcome to Express');
//     res.end();
// })

// server.get('/login', myFun, (req, res) => {
//     res.write({msg:'Welcome to Login Page'});
//     res.end();
// })

server.post('/', (req, res) => {
    // res.write('Welcome to Post Method');
    res.send('Welcome to Post Method');
})

server.put('/', (req, res) => {
    res.json({msg:'Hello Put Method Called'});
})

// server.patch('/', (req, res) => {
//     res.status(400);
//     res.json({msg:'Hello Patch Method Called'});
// })

server.get('/user', (req, res) => {
    res.json(JSON.parse(data));
})




server.listen(8000, () => {
    console.log('Server Start at http://localhost8000');
});
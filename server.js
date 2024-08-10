const express = require('express');
const server = express();   // create server
const morgan = require('morgan');

server.use(morgan('dev'));

const loggerFun = (req, res, next) => {
    console.log(req.ip, req.url, req.method);
    next();
}
server.use(loggerFun);

// in-built middleware
server.use(express.json());
server.use(express.urlencoded({ extended: false}));
server.use("/hello", express.static('public'));

const myFun = (req, res, next) =>{
    console.log(req.body);
    next();
    // if(req.query.age >= 18){
    //     console.log('Success');
    //     next();
    // }else{
    //     res.Json({message: "Sorry you are not allowed to visit this website ..."})
    // }
}

// server.use(myFun);  // application

// POST, GET PUT, PATCH, DELETE
server.get('/', (req, res) => {
    res.write('Welcome to Express');
    res.end();
})

server.get('/login', myFun, (req, res) => {
    res.write({msg:'Welcome to Login Page'});
    res.end();
})

server.post('/', (req, res) => {
    // res.write('Welcome to Post Method');
    res.send('Welcome to Post Method');
})


server.listen(8000, () => {
    console.log('Server Start at http://localhost8000');
});
//*******************************************// http server


// const http = require('http')

// const server = http.createServer((req, res) => {
//     // console.log(req.url);
//     if (req.url == "/profile") {
//         res.end("Hello from Profile")
//     }
//     if (req.url == "/about") {
//         res.end("Hello from about")
//     }
//     if (req.url == '/') {
//         res.end("Hello from home page")
//     }
// })


// server.listen(3000, (req, res) => {
//     console.log("Server is listening on port 3000");

// })




const express = require("express")                       //3 types of middleware a)inbuild b)third
const morgan = require('morgan')

const app = express();
app.use(morgan('dev'))                                   //third party middleware

app.set("view engine", 'ejs')                              //set view engine for ejs

app.use(express.json())                                     //This middleware is used to parse JSON payloads.      //both are build in midleware
app.use(express.urlencoded({ extended: true }))           // This middleware is used to parse URL-encoded payloads. 


app.use(express.static('public'))                          //This middleware is used to serve static files.  //build in middleware

const userModel=require('./models/user')

const dbConnection = require('./config/db')               


// app.use((req, res, next) => {
//     console.log("This is middleware");

//     const a = 5;
//     const b = 5;                                       //custom middleware
//     const c = a + b;
//     console.log(c);
//     return next();

// })


// app.get('/', (req, res, next) => { 
//     const a =5;
//     const b =9;
//     console.log(a+b);                                      //middleware for specific route
//     next();

// }, (req, res) => {
//     res.render('index');
// })


app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.send("Response from about");
})

app.get('/profile', (req, res) => {
    res.send("Response from profile page");
})

app.post('/get-form-data', (req, res) => {
    console.log(req.body);                                  //by defalut express does not parse the form data so we have to use body-parser
    res.send("data recived")
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})


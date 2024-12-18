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
app.use(morgan('dev'))                                   //third party middlewareF

app.set("view engine", 'ejs')

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

app.get('/get-form-data', (req, res) => {
    console.log(req.query);
    res.send("data recived")
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})


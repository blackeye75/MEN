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


const express = require("express")
const app = express();

app.get('/', (req, res) => {
    res.send('Response form Home page');
})

app.get('/about', (req, res) => {
    res.send("Response from about");
})

app.get('/profile', (req, res) => {
    res.send("Response from profile page");
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})
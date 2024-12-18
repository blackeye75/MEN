const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url == "/profile") {
        res.end("Hello from Profile")
    }
    if (req.url == "/about") {
        res.end("Hello from about")
    }
    if(req.url=='/'){
        res.end("Hello from home page")
    }
})


server.listen(3000, (req, res) => {
    console.log("Server is listening on port 3000");

})
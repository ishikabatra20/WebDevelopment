const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const operation = parsedUrl.pathname.slice(1);
    const num1= Number(parsedUrl.query.num1);
    const num2= Number(parsedUrl.query.num2);

    if(operation ==="add"){
        res.end(JSON.stringify(num1+num2));
    } else if(operation ==="sub"){
        res.end(JSON.stringify(num1-num2));
    } else if(operation ==="mul"){
        res.end(JSON.stringify(num1*num2));
    } else if(operation ==="div"){
        res.end(JSON.stringify(num1/num2));
    } else{
        res.end("Invalid operation");
    }

})

server.listen(3000,()=>{
    console.log("Server is listening at port 3000");
});
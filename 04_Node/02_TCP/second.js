const http= require("http");

const server = http.createServer((req,res)=>{
    //"add/10/20"
    console.log("req: ", req.url);
   
    const path = req.url.split('/');
    //path ={' ','add','10','20'}; --> The first element is empty because the url starts with a forward slash and these all are strings. 
    const operation = path[1];
    const num1 = Number([path[2]]);
    const num2= Number([path[3]]);

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


});

server.listen(3000,()=>{
    console.log("Server is listening at port 3000");
})
const app=require('./routes');
const http=require('http');

let port= process.env.PORT || 5000;
const server=http.createServer(app);

server.listen(port,()=>{
    console.log("server is running at http://localhost:5000/resource")
})
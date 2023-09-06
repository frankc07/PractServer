const chalk = require('chalk');

const http = require("http");
const port = 3000;
const host = "localhost";



const servidor = http.createServer((req, res)=>{
    if(req.method === "GET" && req.url === "/info"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/JSON");
        res.end("Hola Franklin, Como Estas?");
    }else{
        res.statusCode = 404;
        res.end("url no encontrada");
    }
})

servidor.listen(port, host, ()=>{
    console.log(chalk.green("Este servidor esta funcionando " + "puerto " + port + " host " + host));

})



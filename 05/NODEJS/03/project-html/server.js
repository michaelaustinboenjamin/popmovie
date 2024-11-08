import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import handlebars from 'handlebars';
import { title } from 'process';
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
function renderTemplate(templatePath,data,callback){
    fs.readFile(templatePath,'utf-8',(err,source)=>{
        if (err){
            return callback(err);
        }
        const template=handlebars.compile(source);
        const result=template(data);
        callback(null,result);
    })
}
//create an http server
const server = http.createServer((req,res)=>{
    res.setHeader('content-Type','text/html');
    if (req.url==='/'){
        const templatePath=path.join(__dirname,'templates','home.html');
        const data={
            title:'Simple HTTP Handlebars Example',
            welcomeMessage:'Welcome to our server'
        }
        renderTemplate(templatePath,data,(err,html)=>{
            if(err){
                res.writeHead(500,{'Content-type':'text/plain'});
                res.end('server ERROR');
            }else{
                res.statusCode=200;
                res.end(html);
            }
        })
    }else if(req.url==='./michael'){
        res.statusCode=200;
        res.end('<h1>Hello,Michael</h1>');
    }else if(req.url==='./about'){
        
    }else{
        res.writeHead(404,{'Content-Type':'text/plain'})
        res.end('<h1>ERROR CODE 404 Not Found!</h1>')
    }
}) ;
//Start the server
const port=3000;
const host='127.0.0.1'
server.listen(port,()=>{
    console.log(`Server is running on http://${host}:${port}`);
})
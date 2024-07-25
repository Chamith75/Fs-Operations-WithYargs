const http = require('http');
const fs = require('fs');

//req> what we send to server(body,params,queryParams)
//res > waht we get from server

let server = http.createServer((request , response)=>{
    // response.write('<h1>hi this is from express js</h1>')
    fs.readFile("./db.json",'utf-8',(error , data) => {
        if (error) throw error;
        response.write(data)
        response.end();
    })
    
})


server.listen(3456 , () => {
    console.log('server is running on 3456')
})
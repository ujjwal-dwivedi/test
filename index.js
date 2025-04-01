//console.log("Hello World");
// const lib=require('./lib.js');


// import {sum,diff} from './lib.js';



// const fs=require('fs');
// //const Randomtxt=fs.readFileSync('demo.txt','utf-8');
// fs.readFile('demo.txt','utf-8',(err,Randomtxt)=>{
//     console.log(Randomtxt);
// });
// //console.log(Randomtxt);



// console.log(lib.sum(4,5)," ",lib.diff(3,6));
// console.log("hello world");
// const express=require('express');
// const server=express();
// server.listen(8080);




// const http=require('http');
// const fs=require('fs');
// const index=fs.readFileSync('index.html','utf-8');
// const data=fs.readFileSync('data.json','utf-8');
// const server=http.createServer((req,res)=>{

//     console.log(req.url, req.method);
//     console.log('server started');
//     console.log("hello World");
//     res.setHeader('Dummy','DummyValue');
//     res.setHeader('Content-Type','application/json');
//     res.end(data);
//     // res.end(index);
// })
// server.listen(8080);





const fs=require('fs');
const index=fs.readFileSync('index.html','utf-8');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
const products=data.products;

const express=require('express');
const server= express();
const morgan=require('morgan');
server.listen(8080, ()=>{
    console.log("server started");
});

// server.get('/',(req,res)=>{
//     //res.send('<h1>hello</h1>');
//     //res.sendFile('C:\\Users\\Ujjwal Dwivedi\\CoderDostNode\\index.html');
//     //res.json(products);
//     //res.sendStatus(404);
//     //res.status(201).send('<h1>Hello</h1>');
// });


server.use(express.json());

//server.use(morgan('default'));
server.use(morgan('dev'));

server.use(express.static('public'));


//Middleware
// server.use((req,res,next)=>{
//     console.log(req.method, req.ip, req.hostname, new Date(), req.get('User-Agent'))
//     //res.json({type:'GET!'})
//     next()
// })

//authentication using middleware
// const auth=(req,res,next)=>{
//     // console.log(req.query)
//     // if(req.body.password=='1234')
//     // {
//     //     next()
//     // }
//     // else
//     // {
//     //     res.sendStatus(401)
//     // }
//     next()
// }


// API - Endpoint - Route

//Read GET /products

// const productController=require('./Controller/product');

//MVC model-view-controller
const productRouter=require('./routes/product');
const userRouter=require('./routes/user');
server.use('/api/products',productRouter.router);
server.use('/api/users',userRouter.router);




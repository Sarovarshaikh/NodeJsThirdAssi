const express = require("express");
const app = express();
const  middleware1 = (req,res,next) =>{
    console.log("middleware1");
    next()
}
const  middleware2 = (req,res,next) =>{
    console.log("middleware2");
    next()
}
app.use(middleware1);
app.get('/',(req,res) =>{
    console.log(req);
    res.send(`<h1>Home   page</h1>`)
})

app.get('/about',(req,res) =>{
    console.log(req);
    res.send(`<h1> I am sarwar shaikh</h1>`)
})


app.get('/contact',(req,res) =>{
    console.log(req);
    res.send(`<h1>Mo:8408026927 </h1>`)
});

app.get("/Section", middleware2, (req, res) => {
    res.send("<h1> middleware</h1>");
  });
app.listen(9000);

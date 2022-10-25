const express = require('express')
const app = express()
const port = 5000

const category = require('./fakedb/catagory.json')
const course = require('./fakedb/data.json')

app.get('/category',(req, res)=>{
    res.send(category)
})

app.get('/courses/:id', (req, res)=>{
    console.log(req);
    // res.send(course);
})
app.get('/courses/:id',(req, res)=>{

})



app.listen(port, ()=>{
    console.log('course api running', port);
})
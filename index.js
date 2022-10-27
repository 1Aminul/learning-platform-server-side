const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

app.use(cors())

const categories = require('./fakedb/catagory.json')
const courses = require('./fakedb/data.json')

app.get('/category',(req, res)=>{
    // const id = req.params.id
    // const category = categories.find(category=> category.id === id)
    res.send(categories)
})


app.get('/courses', (req, res)=>{
    res.send(courses)
})
app.get('/courses/:id',(req, res)=>{

    const id = req.params.id
    const course = courses.filter(course=> course.id === id)
    res.send(course)
})



app.listen(port, ()=>{
    console.log('course api running', port);
})
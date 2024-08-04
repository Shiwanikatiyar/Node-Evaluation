const express = require('express');
const fs = require('fs')

const app = express()
const PORT = 4500
app.use(express.json())


app.get('/courses', (req,res) =>{
    const course =  fs.readFileSync('./course.json', 'utf-8');
    res.send(course);
    console.log(course)
})

app.use((req,res,next)=>{
    if(req.url === '/enroll'){
    res.send("Successfully Enrolled in the course")

    } else if(req.url === '/cancle-enrollment') {
        res.send("Successfully cancled enrollment")
    }
    else{
    next()
    }
    })

    app.get('/my-courses', (req,res) =>{
        const course =  fs.readFileSync('./course.json', 'utf-8');
        res.send(course);
        console.log(course)
    })

app.listen(PORT, () => {
    console.log(`Server is Running on PORT ${PORT}`)
})


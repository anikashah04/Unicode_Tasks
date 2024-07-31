const express=require('express')
const mongoose=require('mongoose')
require('./database')
const Student=require('./student-model')
const StudentRouter=require('./student-router')

const port=process.env.PORT || 3000

const app=express()

app.use(express.json())
app.use(StudentRouter)

app.listen(port, ()=>{
    console.log('Server running on '+port)
})



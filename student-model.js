const mongoose=require('mongoose')
const validator=require('validator')

const studentSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    house:{
        type:String,
       required:true

    },
    wizard:{
        type:Boolean,
        required:true
    }
})

const Student=mongoose.model('Student', studentSchema)
module.exports=Student
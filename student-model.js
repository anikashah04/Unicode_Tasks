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
        default: function(){
            const houses=['Gryffindor','Slytherin','Hufflepuff','Ravenclaw']
            const a=Math.random()
            const b=Math.floor(a*4)
            return houses[b]
        }
    },
    wizard:{
        type:Boolean,
        required:true
    }
})


const Student=mongoose.model('Student', studentSchema)
module.exports=Student

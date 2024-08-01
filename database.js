
const MongoClient = require('mongodb').MongoClient
const mongoose=require('mongoose')
const validator=require('validator')
mongoose.connect('mongodb+srv://anika210421:Jaimaatadi4@cluster0.dun0e9e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=>{ 
    console.log('Connected to Database')

}).catch((error)=>{
    console.log(error)
})
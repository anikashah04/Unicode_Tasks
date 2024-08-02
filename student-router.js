const express=require('express')
const router=new express.Router()
const Student=require('./student-model')
const mongoose=require('mongoose')

module.exports=router

//CREATE
router.post('/characters',async (req,res)=>{
    try{
        const student=new Student(req.body)
        await student.save()
        res.status(201).send(student)
    }catch(error){
        res.status(400).send(error)
    }
})

//READ
router.get('/characters',async(req,res)=>{
    try{
        const students=await Student.find({})
        res.status(200).send(students)
    }
    catch(error){
        res.status(400).send(error)
    }
})

//UPDATE all parameters
router.patch('/characters/:id',async(req,res)=>{

    const updates=Object.keys(req.body)
    const allowedUpdates=['id','name','gender','house','wizard']
    const isValidUpdate=updates.every((character)=>{
        return allowedUpdates.includes(character)
    })
    if(!isValidUpdate){
        return res.status(400).send('Invalid Update Options')
    }
    try{
        const character= await Student.findByIdAndUpdate(req.params.id)
        updates.forEach((update)=>{
            character[update]=req.body[update]
        })
        await character.save()
        if(!character){
            return res.status(404).send('Failed to update')
        }
        res.status(200).send(character)

    }catch(error){
        res.status(500).send(error)
    }
})

//Task-4

//UPDATE HOUSE
router.patch('/characters/:id', async(req,res)=>{
    
    try{
        const id=req.params.id
        const student= await Student.findByIdAndUpdate(id)
        student.house=req.body.house
        await student.save()
        res.status(200).send(student)
    }catch(error){
        res.status(500).send(error)
    }
})

//DELETE MUGGLES
router.delete('/characters/muggles' , async (req,res)=>{
    try{
        const students=await Student.find({wizard:false})
        const muggles=new Array()
        for(var i=0; i<students.length; i++){
            muggles.push(students[i])
            const muggle=await Student.findByIdAndDelete(students[i]._id)
        }
        res.send(students).status(200)
    }
    catch(error){
        res.send(error).status(500)
    }
})

//DELETE STUDENT 
router.delete('/characters/:id', async(req,res)=>{
    try{
        const character= await Student.findByIdAndDelete(req.params.id)
        if(!character){
            return res.status(404).send('Failed to delete')
        }
        res.status(200).send(character)
    }
    catch(error){
        res.status(500).send(error)
    }
})


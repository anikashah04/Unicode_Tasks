
const express=require('express')

const path=require('path')
const port=process.env.PORT || 3000

const app=express()

app.get('/',async (req,res)=>{
    res.send('Harry Potter API')
})

app.get('/characters',async(req,res)=>{
    try{
            //initiate http get request to url using fetch function
            //await pauses the function until request is complete
            //charactersPromise holds the promise(object) returned by fetch function
            const charactersPromise= await fetch('https://hp-api.onrender.com/api/characters')
            //ok property>boolean>checks if request was succesfull
            if (!charactersPromise.ok) {
                return res.status(400).send('Failed to fetch characters');
                //400 means bad request
              }
            //converts promise returned from response body to json
            const charactersJSON = await charactersPromise.json() // parsed json
            res.send(charactersJSON).status(200)
    }
    catch(error){
        res.status(500).send('Failed to fetch characters '+error);
    //500 means internal server error
    }
})

app.get('/spells',async(req,res)=>{
    try{
        const spellsPromise= await fetch('https://hp-api.onrender.com/api/spells')
        if(!spellsPromise.ok)
            {
                return res.status(400).send('Failed to fetch Spells')
            }
        const spellsJSON= await spellsPromise.json()
        res.status(200).send(spellsJSON)
    }
    catch(error){
        res.status(500).send('Failed to fetch Spells '+error)
    }
})

app.get('/hogwartsstaff',async(req,res)=>{
    try{
        const hogwartsStaffPromise= await fetch('https://hp-api.onrender.com/api/characters/staff')
        if(!hogwartsStaffPromise.ok){
            return res.status(400).send('Failed to fetch Hogwarts Staff')
        }
        const hogwartsStaffJSON= await hogwartsStaffPromise.json()
        res.status(200).send(hogwartsStaffJSON)
    }
    catch(error){
        res.status(500).send('Failed to fetch Hogwarts Staff '+error)
    }
})

app.get('/hogwartsstudents',async(req,res)=>{
    try{
        const hogwartsstudentsPromise= await fetch('https://hp-api.onrender.com/api/characters/students')
        if(!hogwartsstudentsPromise.ok){
            return res.status(400).send('Failed to fetch Hogwarts Student')
        }
        const hogwartsstudentsJSON= await hogwartsstudentsPromise.json()
        res.status(200).send(hogwartsstudentsJSON)
    }
    catch(error){
        res.status(500).send('Failed to fetch Hogwarts Students '+error)
    }
})

app.get('/character/:id', async(req,res)=>{
    try{
        //stores the id entered by the user in the http request
        const id=req.params.id
        //passes the id in url and fetches the character and stores the promise in finding
        const finding= await fetch('https://hp-api.onrender.com/api/character/'+id)
        if(!finding.ok)
            {
                return res.status(400).send('Unable to find character')
            }
        //stores the JSON of the character searched by id in characterJSON 
        const characterJSON=await finding.json()
        res.status(200).send(characterJSON)
    }
    catch(error){
        res.status(500).send('Unable to find character '+error)
    }
})

//run server on port
app.listen(port,()=>{
    console.log('Server is up on port '+port)
})


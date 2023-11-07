const express=require('express');
const Notes = require("../models/Notes");
const fetchuser=require("../middleware/fetchuser");
const router=express.Router();
const { body, validationResult } = require("express-validator");


//ROUTE 1:Get all the notes using: GET "/api/auth/fetchallnotes".  login required
router.get('/fetchallnotes',fetchuser,async (req,res)=>
{
    try {
           //fetching notes of unique user id i.e A can view only A Notes,B can view only B Notes
    const notes=await Notes.find({user:req.user.id})

    res.json(notes);
        
    } catch (e) {
        console.log(e);
        res.status(500).json("Some error occured");
    }
 
})


//ROUTE 2:Get all the notes using: POST "/api/auth/addnotes".  login required
router.post('/addnotes',fetchuser,[
    body("title", "Enter Valid title").isLength({ min: 0 }),
    body("description", "Enter Valid description").isLength({ min: 0 }),
],async (req,res)=>
{
    const{title,description,tag}=req.body;
    try{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    }catch(e)
    {
        console.log(e);
            res.status(500).json("Some error occured");
    }
    try
    {
//Creating new note
    const note=new Notes({
        title,description,tag,user:req.user.id
    })
 
    const SavedNote=await note.save()
    res.json(SavedNote);
}
    catch(e)
    {
        console.log(e);
            res.status(500).json("Some error occured");
    }
})


//ROUTE 3:Updating the notes using: PUT "/api/auth/updatenotes".  login required
router.put('/updatenotes/:id',fetchuser,async (req,res)=>
{
    const{title,description,tag}=req.body;

    try{
    //create newNote object
    const newNote={}
    if(title){newNote.title=title}
    if(description){newNote.description=description}
    if(tag){newNote.tag=tag}
    
    
    //find the note to be updated
    let note=await Notes.findById(req.params.id)
    if(!note)
    {
        return   res.status(404).send("Not Found")
    }
    //if id of requested user and already saved user on database is not same then not authorised
    if(note.user.toString()!==req.user.id)
    {
        return res.status(401).send("Not Allowed")
    }

    note=await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
    res.json({note})
    }catch(e)
    {
        console.log(e);
        res.status(500).json("Some error occured");
    }

}
)




//ROUTE 4:Deleting the notes using: DELETE "/api/auth/updatenotes".  login required
router.delete('/deletenotes/:id',fetchuser,async (req,res)=>
{
    try{

    //find the note to be deleted
    let note=await Notes.findById(req.params.id)
    if(!note)
    {
        return   res.status(404).send("Not Found")
    }
    //if id of requested user and already saved user on database is not same then not authorised
    if(note.user.toString()!==req.user.id)
    {
        return res.status(401).send("Not Allowed")
    }

    note=await Notes.findByIdAndDelete(req.params.id)
    res.json({"Success":"Note has been deleted",note:note})
}
catch(e)
{
    console.log(e);
    res.status(500).json("Some error occured");
}
 
}
)




module.exports= router 
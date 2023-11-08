import NoteContext from "./noteContext";

import{useState} from 'react';


const NoteState=(props)=>{
    const n1=[]

    const [notes,setNotes]=useState(n1);


    //FETCH
    const getnotes=async()=>
    {
        //API calls
        const response = await fetch("http://localhost:5000/api/notes/fetchallnotes", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem('token')
            },
          });
          const json=await response.json()
          setNotes(json) 
        
    }

    //ADD
    const addnote= async (title,description,tag)=>
    {
        const response = await fetch("http://localhost:5000/api/notes/addnotes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem('token')
            },
            body: JSON.stringify({title,description,tag})
          });
          const json=await response.json()
         console.log(json)
          
    }


    //DELETE
    const deletenote=async (id)=>
    {
        const response = await fetch(`http://localhost:5000/api/notes/deletenotes/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem('token')
            }
          });
         const json=await response.json()
         console.log(json)

        const newNotes=notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
    }


    //UPDATE
    const editnote=async (id,title,description,tag)=>
    {
        const response = await fetch(`http://localhost:5000/api/notes/updatenotes/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem('token')
            },
            body: JSON.stringify({title,description,tag})
          });
          const json=await response.json()
          console.log(json)

    }


    return(
        <NoteContext.Provider value={{notes,setNotes,addnote,deletenote,getnotes,editnote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
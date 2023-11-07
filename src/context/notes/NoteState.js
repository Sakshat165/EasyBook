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
              "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU0NzFmOGI1MTBiNzlkZWU1NzMyMTBiIn0sImlhdCI6MTY5OTE1OTk0N30.IFC1c4A4PRc5bjDgBkdKLW2MSNBuFomqeVivSpGcZJ0"
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
              "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU0NzFmOGI1MTBiNzlkZWU1NzMyMTBiIn0sImlhdCI6MTY5OTE1OTk0N30.IFC1c4A4PRc5bjDgBkdKLW2MSNBuFomqeVivSpGcZJ0"
            },
            body: JSON.stringify({title,description,tag})
          });
          
          
    }


    //DELETE
    const deletenote=async (id)=>
    {
        const response = await fetch(`http://localhost:5000/api/notes/deletenotes/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU0NzFmOGI1MTBiNzlkZWU1NzMyMTBiIn0sImlhdCI6MTY5OTE1OTk0N30.IFC1c4A4PRc5bjDgBkdKLW2MSNBuFomqeVivSpGcZJ0"
            }
          });
         

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
              "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU0NzFmOGI1MTBiNzlkZWU1NzMyMTBiIn0sImlhdCI6MTY5OTE1OTk0N30.IFC1c4A4PRc5bjDgBkdKLW2MSNBuFomqeVivSpGcZJ0"
            },
            body: JSON.stringify({title,description,tag})
          });

    }


    return(
        <NoteContext.Provider value={{notes,setNotes,addnote,deletenote,getnotes,editnote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
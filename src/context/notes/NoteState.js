import NoteContext from "./noteContext";

import{useState} from 'react';


const NoteState=(props)=>{
    const n1=
        [
            {
              "_id": "65484c846416d8590d8bdd8c",
              "user": "65471f8b510b79dee573210b",
              "title": "Sakshat Shetty",
              "description": "I am a bad boy",
              "tag": "personal",
              "date": "2023-11-06T02:16:36.221Z",
              "__v": 0
            },
            {
              "_id": "65484ca56416d8590d8bdd90",
              "user": "65471f8b510b79dee573210b",
              "title": "Sakshat Shetty",
              "description": "I am a good boy",
              "tag": "personal",
              "date": "2023-11-06T02:17:09.234Z",
              "__v": 0
            },
            {
              "_id": "65484cab6416d8590d8bdd92",
              "user": "65471f8b510b79dee573210b",
              "title": "Sakshat Shetty",
              "description": "I am a happy boy",
              "tag": "personal",
              "date": "2023-11-06T02:17:15.268Z",
              "__v": 0
            }
          
        ]

    const [notes,setNote]=useState(n1);

    const addnote=()=>
    {
        
    }


    return(
        <NoteContext.Provider value={{notes,setNote,addnote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
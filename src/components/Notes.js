import React, { useEffect } from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import NotesItem from './NotesItem'
export default function Notes() {
    const context = useContext(noteContext)
    const{notes,getnotes}=context

    useEffect(()=>{
      getnotes()  
    })
  return (
    <div>
      <div className="row my-3">
            <h2>Your Notes</h2>
            {notes.map((note)=>{
                return <NotesItem key={note._id} note={note}/>
            })}
        </div>
    </div>
  )
}

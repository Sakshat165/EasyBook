import React,{useContext}from 'react'
import noteContext from '../context/notes/noteContext'

export default function NotesItem(props) {
    const context = useContext(noteContext)
    const{deletenote}=context
    const{note,updatenote}=props

  return (
    <div className='col-md-3'>
        <div className="card my-3">
        <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <i className="fa-solid fa-trash mx-2" onClick={()=>{deletenote(note._id)}} />
            <i className="fa-solid fa-pen mx-2" onClick={()=>{updatenote(note)}} />
        </div>
        </div>
    </div>
  )
}

import React,{useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext'
export default function Addnote() {
    const context = useContext(noteContext)
    const{addnote}=context

    const[note,setNote]=useState({title:"",description:"",tag:""})

    const handleclick=(e)=>
    {
        e.preventDefault();
        addnote(note.title,note.description,note.tag)
    }

    const handlechange=(e)=>
    {
        setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <>
      <div className='container my-3'>
            <h2>Add Note</h2>
        <form>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="title" onChange={handlechange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" name="description" onChange={handlechange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <input type="text" className="form-control" id="tag" name="tag" onChange={handlechange}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleclick}>Add Note</button>
        </form>
        </div>
    </>
  )
}

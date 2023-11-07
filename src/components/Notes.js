import React, { useEffect ,useState} from 'react'
import { useContext ,useRef} from 'react'
import noteContext from '../context/notes/noteContext'
import NotesItem from './NotesItem'
export default function Notes() {
    const context = useContext(noteContext)
    const{notes,getnotes,editnote}=context

    useEffect(()=>{
      getnotes() 
      // eslint-disable-next-line  
    },[getnotes])

    const[note,setNote]=useState({id:"",etitle:"",edescription:"",etag:""})

    const updatenote=(currentnote)=>
    {
         ref.current.click()
         //setting details of selected note
         setNote({id:currentnote._id,etitle:currentnote.title, edescription:currentnote.description, etag:currentnote.tag})
    }
    const ref=useRef(null)
    const refClose=useRef(null)
   

    const handleclick=(e)=>
    {
        editnote(note.id,note.etitle,note.edescription,note.etag)
        refClose.current.click()
    }

    const handlechange=(e)=>
    {
        setNote({...note,[e.target.name]:e.target.value})
    }

  return (
    <div>
        <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} onChange={handlechange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={handlechange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={handlechange}/>
            </div>
        </form>
            </div>
            <div className="modal-footer">
                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={handleclick}>Save changes</button>
            </div>
            </div>
        </div>
        </div>
      <div className="row my-3">
            <h2>Your Notes</h2>
            {notes.map((note)=>{
                return <NotesItem key={note._id} updatenote={updatenote} note={note}/>
            })}
        </div>
    </div>
  )
}

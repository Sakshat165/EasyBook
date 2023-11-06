import React from 'react'

export default function Addnote() {
    const handleclick=(e)=>
    {
        e.preventDefault();
        console.log("added")
    }

    const handlechange=()=>
    {

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
            <button type="submit" className="btn btn-primary" onClick={handleclick}>Add Note</button>
        </form>
        </div>
    </>
  )
}

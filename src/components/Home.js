import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

export default function Home() {
    const a=useContext(noteContext);
  return (
    <div>
      Home
    </div>
  )
}

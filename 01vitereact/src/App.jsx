import { useState } from 'react'
import Chai from './chai'

function App() {
  const username="chai aur code"
  //evaluated expression at h1 means its the final answer

  return (
    <>
    <Chai/>
    <h1>chai aur react {username}</h1>
    <p>test para</p>
    </>
   
  )
}

export default App

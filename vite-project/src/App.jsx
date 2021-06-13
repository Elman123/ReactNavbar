import React, { useState } from 'react'
import logo2 from "./logo2.svg"
import './App.css'
import Navbar from './navbar.jsx'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default App

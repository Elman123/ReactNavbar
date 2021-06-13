import React, { useState } from 'react'
import logo2 from "./logo2.svg"
import './App.css'
import Features from "./Features.jsx"
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Features />
    </div>
  )
}

export default App

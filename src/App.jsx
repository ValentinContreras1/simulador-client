//import { Navbar } from './components/Navbar'
import { useState } from "react"
import "./App.css"
import { useEffect } from "react"
import { db } from "./firebase/config"
import { ref, onValue, set } from "firebase/database"

function App() {
  
  return (
    <>
      <Navbar></Navbar>
    </>
  )
}

export default App

import { useState } from "react"
import "./App.css"
import { useEffect } from "react"
import { db } from "./firebase/config"
import { ref, onValue, set } from "firebase/database"
import { Container } from './components/Container'
import { Navbar } from './components/Navbar'
import { Laguna } from './components/Laguna'
import { Aireadores } from "./components/Aireadores"
import { Aireador } from "./components/Aireador"

function App() {
  
  return (
    <Container>
      <Navbar></Navbar>
      <Laguna>
        <Aireadores>
          <Aireador></Aireador>
          <Aireador></Aireador>
          <Aireador></Aireador>
          <Aireador></Aireador>
          <Aireador></Aireador>
        </Aireadores>
      </Laguna>
    </Container>
  )
}

export default App

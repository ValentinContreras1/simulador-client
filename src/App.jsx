import { useState } from "react"
import "./App.css"
import { useEffect } from "react"
import { db } from "./firebase/config"
import { ref, onValue, set } from "firebase/database"
import { Container } from "./components/Container"
import { Navbar } from "./components/Navbar"
import { Laguna } from "./components/Laguna"
import { Aireadores } from "./components/Aireadores"
import { Aireador } from "./components/Aireador"
import { Grid } from "./components/Grid"
import { useLagunasStore } from "./store/lagunas"

function App() {
  const fetchLagunas = useLagunasStore((state) => state.fetchLagunas)
  const lagunas = useLagunasStore((state) => state.lagunas)

  useEffect(() => {
    fetchLagunas()
  }, [])

  console.log(lagunas)

  return (
    <Container>
      <Navbar></Navbar>
      <Grid>
        {lagunas.map((laguna) => (
          <Laguna
            id={laguna.id}
            od={laguna.od}
            orp={laguna.orp}
            key={laguna.id}
          >
            <Aireadores>
              {laguna.aireadores.map((aireador) => (
                <Aireador frecuencia={aireador.frecuencia}></Aireador>
              ))}
            </Aireadores>
          </Laguna>
        ))}
      </Grid>
    </Container>
  )
}

export default App

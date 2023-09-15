import "./App.css"
import { useEffect } from "react"
import { Container } from "./components/Container"
import { Navbar } from "./components/Navbar"
import { Laguna } from "./components/Laguna"
import { Aireadores } from "./components/Aireadores"
import { Aireador } from "./components/Aireador"
import { useLagunasStore } from "./store/lagunas"
import { CrearButton } from "./components/CrearButton"

function App() {
  const fetchLagunas = useLagunasStore((state) => state.fetchLagunas)
  const lagunas = useLagunasStore((state) => state.lagunas)
  const create = useLagunasStore((state) => state.createEmptyLaguna)

  useEffect(() => {
    fetchLagunas()
  }, [])

  console.log(lagunas)

  const handleClick = () => {
    create()
  }

  return (
    <Container>
      <Navbar>
        <CrearButton onClick={handleClick}></CrearButton>
      </Navbar>
        {lagunas.map((laguna) => (
          <Laguna
            id={laguna.id}
            od={laguna.od}
            orp={laguna.orp}
            key={laguna.id}
          >
            <Aireadores key={laguna.id}>
              {laguna.aireadores.map((aireador) => (
                <Aireador
                  frecuencia={aireador.frecuencia}
                  key={aireador.id}
                ></Aireador>
              ))}
            </Aireadores>
          </Laguna>
        ))}
    </Container>
  )
}

export default App

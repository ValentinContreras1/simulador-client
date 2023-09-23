import "./App.css"
import { useEffect } from "react"
import { Container } from "./components/Container"
import { Navbar } from "./components/Navbar"
import { Laguna } from "./components/Laguna"
import { Dialog } from "./components/Dialog"
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
        <Dialog></Dialog>
        {lagunas.map((laguna) => (
          <Laguna
            id={laguna.id}
            od={laguna.od}
            orp={laguna.orp}
            key={laguna.id}
          >
          </Laguna>
        ))}
    </Container>
  )
}

export default App

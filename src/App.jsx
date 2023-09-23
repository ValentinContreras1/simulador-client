import "./App.css"
import { useEffect, useState } from "react"
import { Container } from "./components/Container"
import { Navbar } from "./components/Navbar"
import { Laguna } from "./components/Laguna"
import { Dialog } from "./components/Dialog"
import { Aireadores } from "./components/Aireadores"
import { useLagunasStore } from "./store/lagunas"
import { CrearButton } from "./components/CrearButton"

function App() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  //console.log(open)

  const fetchLagunas = useLagunasStore((state) => state.fetchLagunas)
  const lagunas = useLagunasStore((state) => state.lagunas)
  const create = useLagunasStore((state) => state.createEmptyLaguna)

  useEffect(() => {
    fetchLagunas()
  }, [])

  //console.log(lagunas)

  const handleClick = () => {
    create()
  }

  return (
    <Container>
      <Navbar>
        <CrearButton onClick={handleClick}></CrearButton>
      </Navbar>
      <Dialog onOpen={open} onClose={handleClose}>
        <Aireadores></Aireadores>
      </Dialog>
      {lagunas.map((laguna) => (
        <Laguna
          id={laguna.id}
          od={laguna.od}
          orp={laguna.orp}
          key={laguna.id}
          onClick={handleOpen}
        ></Laguna>
      ))}
    </Container>
  )
}

export default App

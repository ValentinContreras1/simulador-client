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
  const [actualId, setActualId] = useState("")

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChangeActualId = (lagunaId) => {
    setActualId(lagunaId)
  }

  //console.log(open)

  //console.log(actualId)

  const fetchLagunas = useLagunasStore((state) => state.fetchLagunas)
  const lagunas = useLagunasStore((state) => state.lagunas)
  const create = useLagunasStore((state) => state.createEmptyLaguna)
  const remove = useLagunasStore((state) => state.deleteLaguna)

  useEffect(() => {
    fetchLagunas()
  }, [])

  console.log(lagunas)

  const handleClick = () => {
    create()
  }

  const handleDelete = (fireid) => {
    remove(fireid)
  }

  return (
    <Container>
      <Navbar>
        <CrearButton onClick={handleClick}></CrearButton>
      </Navbar>
      <Dialog onOpen={open} onClose={handleClose}>
        <Aireadores lagunaId={actualId}></Aireadores>
      </Dialog>
      {lagunas.map((laguna) => (
        <Laguna
          id={laguna.id}
          od={laguna.od}
          orp={laguna.orp}
          airs={laguna.aireadores.length}
          key={laguna.id}
          onClick={() => {
            handleOpen()
            handleChangeActualId(laguna.id)
          }}
          onDelete={handleDelete}
        ></Laguna>
      ))}
    </Container>
  )
}

export default App

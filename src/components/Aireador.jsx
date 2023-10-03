import { Knob } from "primereact/knob"
import { useState, useEffect } from "react"
import { useLagunasStore } from "../store/lagunas"
import { useConsumoStore } from "../store/consumo"

// eslint-disable-next-line react/prop-types
export const Aireador = ({ freq, id, lagunaId, encendido }) => {
  const [frecuencia, setFrecuencia] = useState(freq)

  const updateFrecuencia = useLagunasStore(
    (state) => state.changeAireadorFrecuencia
  )
  const updateConsumo = useConsumoStore((state) => state.actualizarConsumo)

  const fetch = useLagunasStore((state) => state.fetchLagunas)
  const remove = useLagunasStore((state) => state.deleteAireador)

  const prender = useLagunasStore((state) => state.turnOnAireador)
  const apagar = useLagunasStore((state) => state.turnOffAireador)

  const handleRemove = () => {
    remove(lagunaId, id)
  }

  const handleTurnOff = () => {
    apagar(lagunaId, id)
  }

  const handleTurnOn = () => {
    prender(lagunaId, id)
  }

  const handleUpdateFrecuencia = (e) => {
    if (!encendido) {
      return
    }
    updateFrecuencia(lagunaId, id, e.value)
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <div className='col-2 ps-3 p-3 text-white text-center'>
      <div className='tarjeta bg-secondary pb-5 rounded-4'>
        <div className='col-12 text-end p-2'>
          <button className='border-0 bg-secondary' onClick={handleRemove}>
            <img src='https://img.icons8.com/?size=30&id=11997&format=png' />
          </button>
          <button onClick={handleTurnOff}>Apagar</button>
          <button onClick={handleTurnOn}>Encender</button>
        </div>
        <h1 className='fs-5'>Aireador</h1>
        <Knob
          className='fs-4'
          value={frecuencia}
          onChange={(e) => {
            setFrecuencia(e.value)
            handleUpdateFrecuencia(e)
            updateConsumo()
          }}
          valueColor={"white"}
          rangeColor={"#313131"}
          textColor={"white"}
          size={60}
          min={0}
          max={100}
        />
      </div>
    </div>
  )
}

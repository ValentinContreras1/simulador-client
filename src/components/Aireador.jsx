import { Knob } from "primereact/knob"
import { useState } from "react"
import { useLagunasStore } from "../store/lagunas"

export const Aireador = ({ freq, id, lagunaId }) => {
  const updateFrecuencia = useLagunasStore((state) => state.changeAireadorFrecuencia)

  const [frecuencia, setFrecuencia] = useState(freq)

  return (
    <div className='col-2 ps-3 p-3 text-white text-center'>
      <div className='tarjeta bg-secondary pt-5 pb-5 rounded-4'>
        <h1 className='fs-5 col'>Aireador</h1>
        <Knob
          className='fs-4'
          value={frecuencia}
          onChange={(e) => {setFrecuencia(e.value), updateFrecuencia(lagunaId, id, frecuencia)}}
          valueColor={"white"}
          rangeColor={"#313131"}
          textColor={"white"}
          size={60}
        />
      </div>
    </div>
  )
}

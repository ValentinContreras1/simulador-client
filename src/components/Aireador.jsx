import { Knob } from "primereact/knob"
import { useState } from "react"

export const Aireador = ({}) => {
  const [frecuencia, setFrecuencia] = useState("")

  return (
    <li className='fs-5 text-start'>
      Aireador: {frecuencia}{" "}
      <Knob
        value={frecuencia}
        onChange={(e) => setFrecuencia(e.value)}
        min={0}
        max={100}
        step={1}
        textColor={'white'}
      />
    </li>
  )
}

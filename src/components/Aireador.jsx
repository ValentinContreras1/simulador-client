import { Knob } from "primereact/knob"
import { useState } from "react"

export const Aireador = ({}) => {
  const [frecuencia, setFrecuencia] = useState("")

  return (
    <div className="row w-100 ps-3">
      <li className=' fs-5 text-start col'>
        Aireador: {frecuencia}{" "}
      </li>
      <Knob
        className="col-2 text-end"
        value={frecuencia}
        onChange={(e) => setFrecuencia(e.value)}
        valueColor={"white"}
        rangeColor={"#313131"}
        size={30}
      />
    </div>
  )
}

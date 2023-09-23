import { Knob } from "primereact/knob"
import { useState } from "react"

export const Aireador = ({id=1, _freq=0}) => {
  const [frecuencia, setFrecuencia] = useState(_freq)

  return (
    <div className="col-2 ps-3 p-3 text-white text-center">
      <div className="bg-secondary pt-5 pb-5 rounded-4 shadow">
        <h1 className='fs-5 col'>
          Aireador {id}:
        </h1>
        <Knob
          className="fs-4"
          value={frecuencia}
          onChange={(e) => setFrecuencia(e.value)}
          valueColor={"white"}
          rangeColor={"#313131"}
          textColor={"white"}
          size={60}
        />
      </div>
    </div>
    
  )
}

import { Knob } from "primereact/knob"
import { useState } from "react"

export const Laguna = ({id, _od=0, _orp=0, onClick}) => {
  const [od, setOd] = useState(_od)
  const [orp, setOrp] = useState(_orp)

  return (
    <div className="col-3 p-3 text-center">
      <div className="col-12 bg-dark p-3 pb-1 rounded-4 text-white fs-5 text-start">
        <div className="row">
          <div className="col-10 large-text">ID: {id}</div>
          <button className="border-0 col-2 bg-dark text-end"><img src="https://img.icons8.com/?size=30&id=11997&format=png" /></button>
        </div>
        <br></br>
        <div className="row mx-auto">
          <div className="col-6 text-center">
            <p>OD:</p>
            <Knob
              className="fs-4"
              value={od}
              onChange={(e) => setOd(e.value)}
              valueColor={"white"}
              rangeColor={"#313131"}
              textColor={"white"}
              size={60}
            />
          </div>
          <div className="col-6 text-center">
            <p>ORP:</p>
            <Knob
              className="fs-4"
              value={orp}
              onChange={(e) => setOrp(e.value)}
              valueColor={"white"}
              rangeColor={"#313131"}
              textColor={"white"}
              size={60}
            />
          </div>
        </div>
        <div>
          {/* Aqui puedes agregar las perillas */}
        </div>
        <button className="col-12 text-secondary fs-6 p-3 text-center bg-dark border-0" onClick={ onClick }>Click aqui para ver aireadores</button>
      </div>
    </div>
  )
}

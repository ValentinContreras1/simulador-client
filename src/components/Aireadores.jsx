import { AddAireador } from './AddAireador'
import { Aireador } from './Aireador'

export const Aireadores = ({children, id=1, od=100, orp=50, cl="0%"}) => {
  return (
    <div className="p-5 row">
        <div className='col-6'>
            <h1 className="text-white mb-0 fs-2">Laguna {id}</h1>
            <p className="text-secondary">Aireadores</p>
        </div>
        <div className='col-6 text-end text-white lightbtn'>
        <p className="m-0">Consumo Laguna: {cl}</p>
            <p className="m-0">OD: {od}</p>
            <p className="m-0">ORP: {orp}</p>
        </div>
        <div className="row mx-auto">
            <Aireador></Aireador>
            <Aireador></Aireador>
            <AddAireador></AddAireador>
        </div>
    </div>
  )
}

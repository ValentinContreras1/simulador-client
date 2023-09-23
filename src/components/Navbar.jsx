import { Consumo } from './Consumo'

export const Navbar = ({children, consumo}) => {
  return (
    <nav className="container">
      <div className="navbar bg-dark mt-4 ps-4 pe-4 rounded-4">
        <div className="col-6">
          <div className="col-2 float-start fs-4 text-white text-end">Consumo:</div>
          <Consumo consumo={consumo}></Consumo>
        </div>
        <div className="col-6 text-end">
          {children}
        </div>
      </div>
    </nav>
  )
}

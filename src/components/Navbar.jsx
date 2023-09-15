export const Navbar = ({children, consumo}) => {
  return (
    <nav className="container">
      <div className="navbar bg-dark mt-4 ps-4 pe-4 rounded-4">
        <div className="col-6 fs-4 text-white">Consumo: {consumo}</div>
        <div className="col-6 text-end">
          {children}
        </div>
      </div>
  </nav>
  )
}

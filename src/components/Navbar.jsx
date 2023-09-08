const navbarStyle = {
  backgroundColor: "#1e1e1e",
}

const Navbar = () => {
  return (
    <div className='navbar' style={navbarStyle}>
      <div className='navbar-text'>Consumo: </div>
      <button className='navbar-button'>+ Crear</button>
    </div>
  )
}

export default Navbar

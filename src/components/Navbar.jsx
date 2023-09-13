import { CrearButton } from "./CrearButton"

export const Navbar = ({children}) => {
  const navbarStyle = {
    backgroundColor: "#1e1e1e",
    width: "90%",
    margin: "auto",
    padding: "20px 40px 20px 40px",
    color: "white",
    borderRadius: "20px",
    zIndex: 1,
  }

  const textStyle = {
    float: "left",
    width: "50%",
    fontSize: "25px",
  }

  return (
    <div style={navbarStyle}>
      <div style={textStyle}>Consumo:</div>
      {children}
    </div>
  )
}

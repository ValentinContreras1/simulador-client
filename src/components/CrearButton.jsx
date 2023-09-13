const buttonStyle = {
  textAlign: "right",
  width: "50%",
  color: "#fff",
  fontSize: "25px",
  background: "none",
  border: "none",
  paddingRight: "50px",
}

export const CrearButton = ({ onClick }) => {
  const handleClick = () => {
    onClick()
  }

  return (
    <button style={buttonStyle} onClick={handleClick} type='button'>
      + Crear
    </button>
  )
}

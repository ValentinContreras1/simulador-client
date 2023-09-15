import "./main.css"

export const CrearButton = ({ onClick }) => {
  const handleClick = () => {
    onClick()
  }

  return (
    <button className='create border-0 bg-secondary rounded-3 ps-2 pe-3 fs-4 text-white' onClick={handleClick} type='button'>
      + Crear
    </button>
  )
}

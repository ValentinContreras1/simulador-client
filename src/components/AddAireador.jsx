export const AddAireador = ({ onClick }) => {
  return (
    <div className='col-2 ps-3 p-3 text-center'>
      <button
        className='tarjeta col-12 text-white bg-secondary pt-5 pb-5 rounded-4 border-0'
        onClick={onClick}
      >
        <h1 className='fs-5 col'>Agregar</h1>
        <img
          src='https://img.icons8.com/?size=96&id=102544&format=png'
          width={60}
        />
      </button>
    </div>
  )
}

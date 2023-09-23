export const Laguna = ({id, od, orp, onClick}) => {
  return (
    <div className="col-3 p-3 text-center">
      <button className="col-12 bg-dark p-3 pb-1 rounded-4 text-white fs-5 text-start border-0" onClick={ onClick }>
        <div className="row">
          <div className="col-10 large-text">ID: {id}</div>
          <button className="border-0 col-2 bg-dark text-end"><img src="https://img.icons8.com/?size=30&id=11997&format=png" /></button>
        </div>
        <br></br>
        <div>OD: {od}</div>
        <div>ORP: {orp}</div>
        <div>
          {/* Aqui puedes agregar las perillas */}
        </div>
        <p class="text-secondary fs-6 pt-3 text-center">Click para ver aireadores</p>
      </button>
    </div>
  )
}

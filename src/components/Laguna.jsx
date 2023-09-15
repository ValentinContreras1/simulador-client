export const Laguna = ({ children, id, od, orp }) => {
  return (
    <div className="col-3 p-3">
      <div className="bg-dark p-3 rounded-4 text-white fs-5">
        <div className="row">
          <div className="col-10">ID: {id}</div>
          <button className="border-0 col-2 bg-dark text-end"><img src="https://img.icons8.com/?size=30&id=11997&format=png" /></button>
        </div>
        <br></br>
        <div>OD: {od}</div>
        <div>ORP: {orp}</div>
        <div>
          {/* Aqui puedes agregar las perillas */}
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

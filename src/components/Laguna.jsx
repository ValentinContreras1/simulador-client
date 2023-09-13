export const Laguna = ({ children, id, od, orp }) => {
  const cardStyle = {
    backgroundColor: "#1e1e1e",
    padding: "20px 40px 20px 40px",
    color: "white",
    borderRadius: "20px",
    margin: "20px",
    textAlign: "left",
    // textIndent: '20px',
  }

  const leftSyle = {
    float: "left",
    width: "60%",
  }

  const rightSyle = {
    float: "right",
    width: "40%",
    textAlign: "center",
  }

  const titleStyle = {
    color: "white",
    fontSize: "30px",
    marginBottom: "30px",
  }

  const sensorStyle = {
    color: "white",
    fontSize: "20px",
    marginBottom: "5px",
  }

  return (
    <div style={cardStyle}>
      <div style={leftSyle}>
        <div style={titleStyle}>{id}</div>
        <div style={sensorStyle}>OD: {od}</div>
        <div style={sensorStyle}>ORP: {orp}</div>
      </div>
      <div style={rightSyle}>
      </div>
      {children}
    </div>
  )
}

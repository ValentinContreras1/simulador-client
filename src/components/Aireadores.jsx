const airStyle = {
  height: '120px',
  margin: 'auto',
  marginTop: '30px',
  overflowY: 'scroll',
};

export const Aireadores = ({children}) => {
  return (
    <ul className='fs-5 bg-secondary rounded-4 text-white' style={airStyle}>
      {children}
    </ul>
  );
};
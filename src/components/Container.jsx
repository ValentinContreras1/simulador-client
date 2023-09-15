export const Container = ({ children }) => {
  return (
    <div className='container-fluid bg-secondary-subtle'>
      <div className="row">
        {children}
      </div>
    </div>
  );
};
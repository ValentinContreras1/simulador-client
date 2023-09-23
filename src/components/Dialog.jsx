const dialog = {
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.5)',
}

const content = {
  height: '600px',
  width: '90%',
  position: 'fixed',
  top: '5%',
  transform: 'translateY(-50%)',
  left: '50%',
  transform: 'translateX(-50%)',
  boxShadow: '0px 0px 200px black',
  overflowY: 'auto'
};

export const Dialog = ({children}) => {
  return (
    <dialog id="dialog" open={true} class="border-0" style={dialog}>
      <button class="border-0 opacity-0" style={dialog} onClick={() => document.getElementById("dialog").open = false}>
      </button>
      <div class="bg-dark rounded-4" style={content}>
        {children}
      </div>
    </dialog>
  );
};
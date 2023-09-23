import { useState } from "react";

const dialog = {
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.5)',
}

const content = {
  height: '90%',
  width: '90%',
  position: 'fixed',
  top: '5%',
  transform: 'translateY(-50%)',
  left: '50%',
  transform: 'translateX(-50%)',
  boxShadow: '0px 0px 200px black',
  overflowY: 'hidden',
  overflowX: 'hidden',
  zIndex: '99'
};

export const Dialog = ({children, onOpen, onClose}) => {

  return (
    <dialog id="dialog" open={onOpen} className="border-0" style={dialog}>
      <button className="border-0 opacity-0" style={dialog} onClick={onClose}>
      </button>
      <div className="bg-dark rounded-4" style={content}>
        {children}
      </div>
    </dialog>
  );
};
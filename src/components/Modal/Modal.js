import React, { useEffect } from 'react';
import 'components/styles.css';


const Modal = ({ isOpen, onClose, imageURL }) => {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose]);

  return (
    <>
      {isOpen && (
        <div className="Overlay" onClick={onClose}>
          <div className="Modal" onClick={(e) => e.stopPropagation()}>
            <button className="CloseButton" type="button" onClick={onClose}>
              Close
            </button>
            <img src={imageURL} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
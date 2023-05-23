import React from 'react';

function ImageModal({ imageUrl, onClose }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <img src={imageUrl} alt="Full Image" />
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default ImageModal;

import React from 'react';

function ImageThumbnail({ photo }) {
  const openPhotoInNewTab = () => {
    window.open(photo.url, '_blank');
  };

  return (
    <div className="thumbnail" onClick={openPhotoInNewTab}>
      <img src={photo.thumbnailUrl} alt={photo.title} />
    </div>
  );
}

export default ImageThumbnail;

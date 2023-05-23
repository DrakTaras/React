import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageThumbnail from './ImageThumbnail';
import ExpandedImageModal from './ExpandedImageModal';
import './App.css';

function App() {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        setPhotos(response.data.slice(0, 10));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleThumbnailClick = photo => {
    setSelectedPhoto(photo);
  };

  const handleModalClose = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="App">
      <h1>Photos</h1>
      <div className="thumbnails-container">
        {photos.map(photo => (
          <ImageThumbnail
            key={photo.id}
            photo={photo}
            onClick={handleThumbnailClick}
          />
        ))}
      </div>
      {selectedPhoto && (
        <ExpandedImageModal
          photo={selectedPhoto}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}

export default App;

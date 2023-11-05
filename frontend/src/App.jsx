import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from "mocks/photos";

// Note: Rendering a single component to build components in isolation
 const App = () => {
  const [favorites, setFavorites] = useState([]);

  //Function to check if the photo-id of the liked photo is included in the favorites array.
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      //If the element in favorites is equal to the given id, it produces a false boolean to remove it from favorites.
      return setFavorites([...favorites.filter((photoId) => photoId !== id)]);
    }
    //Otherwise, add the photo to favorites.
    setFavorites([...favorites, id])
  };

  const [modal, setModal] = useState(false);
  const [photo, setPhoto] = useState(null);

  const toggleModalWithPhoto = (photo) => {
    setModal(!modal);
    modal === false ? setPhoto(photo) : setPhoto(null)
  };

  return (
    <div className="App">
      <HomeRoute 
      favorites={favorites}
       toggleFavorite={toggleFavorite}
        toggleModalWithPhoto={toggleModalWithPhoto} 
        modal={modal}
        photos={photos}
        />
      {modal && (
      <PhotoDetailsModal 
      toggleModalWithPhoto={toggleModalWithPhoto} 
      photo={photo}
      modal={modal} 
      favorites={favorites}
      toggleFavorite={toggleFavorite}
      />
      )}
    </div>
  );
};

export default App;

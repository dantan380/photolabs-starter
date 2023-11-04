import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

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

  const toggleModal = () => {
    console.log(modal)
    setModal(!modal);
  };

  return (
    <div className="App">
      <HomeRoute 
      favorites={favorites}
       toggleFavorite={toggleFavorite}
        toggleModal={toggleModal} 
        modal={modal}
        />
      {modal && (
      <PhotoDetailsModal 
      toggleModal={toggleModal} 
      modal={modal} 
      />
      )}
    </div>
  );
};

export default App;

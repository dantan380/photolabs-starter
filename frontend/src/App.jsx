import React from 'react';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from "mocks/photos";

// Note: Rendering a single component to build components in isolation
 const App = () => {
  const { state, toggleFavorite, toggleModalWithPhoto } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
      favorites={state.favorites}
       toggleFavorite={toggleFavorite}
        toggleModalWithPhoto={toggleModalWithPhoto} 
        modal={state.modal}
        photos={photos}
        />
      {state.modal && (
      <PhotoDetailsModal 
      toggleModalWithPhoto={toggleModalWithPhoto} 
      photo={state.photo}
      modal={state.modal} 
      favorites={state.favorites}
      toggleFavorite={toggleFavorite}
      />
      )}
    </div>
  );
};

export default App;

import React from 'react';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
 const App = () => {
  const { state, toggleFavorite, toggleModalWithPhoto } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
      topics={state.topicData}
      favorites={state.favorites}
       toggleFavorite={toggleFavorite}
        toggleModalWithPhoto={toggleModalWithPhoto} 
        modal={state.modal}
        photos={state.photoData}
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

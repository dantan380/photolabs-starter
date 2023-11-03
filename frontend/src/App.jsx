import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';

// Note: Rendering a single component to build components in isolation
 const App = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      return setFavorites([...favorites.filter((photoId) => photoId !== id)]);
    }
    setFavorites([...favorites, id])
  };

  return (
    <div className="App">
      <HomeRoute favorites={favorites} toggleFavorite={toggleFavorite}/>
    </div>
  );
};

export default App;

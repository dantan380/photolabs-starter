import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const { username, imageSource, id, location, profile } = sampleDataForPhotoListItem;
  const { city, country } = location;

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = Array(3).fill(0);
    const listItems = photos.map((photo, i) => <PhotoListItem 
      username={username} 
      imageSource={imageSource}
      key={i}
      city={city}
      country={country}
      profile={profile}
      />);
  return (
    <div className="App">
      {listItems}
    </div>
  );
};

export default App;

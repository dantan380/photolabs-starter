import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";
  
const listItems = photos.map((photo) => { return (<PhotoListItem
  key={photo.id}
  city={photo.location.city}
  country={photo.location.country}
  fullPhoto={photo.urls.full}
  regularPhoto={photo.urls.regular}
  userId={photo.user.id}
  username={photo.user.username}
  name={photo.user.name}
  profileImg={photo.user.profile}
  />) })

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {listItems}
    </ul>
  );
};

export default PhotoList;

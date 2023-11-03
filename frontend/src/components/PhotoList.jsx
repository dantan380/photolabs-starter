import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = ({ favorites, toggleFavorite }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => {
        return (
          <PhotoListItem
            key={photo.id}
            id={photo.id}
            city={photo.location.city}
            country={photo.location.country}
            fullPhoto={photo.urls.full}
            regularPhoto={photo.urls.regular}
            userId={photo.user.id}
            username={photo.user.username}
            name={photo.user.name}
            profileImg={photo.user.profile}
            isFavorite={favorites.includes(photo.id)} //Value of isFavorite is a boolean.
            toggleFavorite={toggleFavorite}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;

import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ favorites, toggleFavorite, modal, toggleModalWithPhoto, photos }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => {
        return (
          <PhotoListItem
            key={photo.id}
            photo={photo}
            isFavorite={favorites.includes(photo.id)} //Value of isFavorite is a boolean.
            toggleFavorite={toggleFavorite}
            modal={modal}
            toggleModalWithPhoto={toggleModalWithPhoto}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;

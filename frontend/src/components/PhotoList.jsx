import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = ({ favorites, toggleFavorite, modal, toggleModal }) => {
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
            toggleModal={toggleModal}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;

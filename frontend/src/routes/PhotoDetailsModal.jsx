import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = ({
  toggleModalWithPhoto,
  photo,
  favorites,
  toggleFavorite,
}) => {
  return (
  <div className="photo-details-modal__top-bar">
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={toggleModalWithPhoto}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <section className="photo-list__item">
        <PhotoFavButton
          photoId={photo.id}
          isFavorite={favorites.includes(photo.id)}
          toggleFavorite={toggleFavorite}
        />
        <div>
          <img src={photo.urls.full} className="photo-details-modal__image" />
          <div>
            <img
              src={photo.user.profile}
              className="photo-details-modal__photographer-profile"
            />
            <div className="photo-details-modal__photographer-info">
              <p>{photo.user.name}</p>
              <div className="photo-details-modal__photographer-location">
                <p>
                  {photo.location.city}, {photo.location.country}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="photo-details-modal__header">Similar Photos</div>
        <div className="photo-details-modal__images">
          <PhotoList
            photos={Object.values(photo.similar_photos)}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;

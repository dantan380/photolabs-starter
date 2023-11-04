import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
  id,
  city,
  country,
  regularPhoto,
  fullPhoto,
  userId,
  username,
  name,
  profileImg,
  isFavorite,
  toggleFavorite,
  modal,
  toggleModal,
}) => {
  return (
    <section className="photo-list__item">
      <PhotoFavButton
        id={id}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
      <div onClick={toggleModal}>
        <img src={regularPhoto} className="photo-list__image" />
        <div className="photo-list__user-details">
          <img src={profileImg} className="photo-list__user-profile" />
          <div className="photo-list__user-info">
            <p>{name}</p>
            <div className="photo-list__user-location">
              <p>
                {city}, {country}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoListItem;

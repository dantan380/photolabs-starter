import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { city, country, regularPhoto, fullPhoto, userId, username, name, profileImg } = props;
  return (
    <section className="photo-list__item">
      <PhotoFavButton />
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
    </section>
  );
};

export default PhotoListItem;

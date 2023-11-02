import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { imageSource, profile, username, city, country, id } = props;
  return (
    <section className="photo-list__item">
      <PhotoFavButton />
      <img src={imageSource} key={id} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <p>{username}</p>
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

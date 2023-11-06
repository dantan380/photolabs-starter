import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  return (
    <section className="photo-list__item">
      <PhotoFavButton
        photoId={props.photo.id}
        isFavorite={props.isFavorite}
        toggleFavorite={props.toggleFavorite}
      />
      <div
        onClick={() => {
          props.toggleModalWithPhoto(props.photo);
        }}
      >
        <img src={props.photo.urls.regular} className="photo-list__image" />
        <div className="photo-list__user-details">
          <img
            src={props.photo.user.profile}
            className="photo-list__user-profile"
          />
          <div className="photo-list__user-info">
            <p>{props.photo.user.name}</p>
            <div className="photo-list__user-location">
              <p>
                {props.photo.location.city}, {props.photo.location.country}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoListItem;

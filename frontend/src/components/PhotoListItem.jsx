import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {imageSource, profile, username, city, country, id} = props;
  return (
    <>
      <img src={imageSource} key={id}/>
      <img src={profile}/>
      <p>{username}</p>
      <p>{city} {country}</p>
    </>
  )
};

export default PhotoListItem;

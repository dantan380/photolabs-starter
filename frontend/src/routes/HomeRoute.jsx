import React from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ topics, favorites, toggleFavorite, modal, toggleModalWithPhoto, photos }) => {
  return (
    <div className="home-route">

      {/*Setting the value of isFavPhotoExist to be a boolean.*/}
      <TopNavigation topics={topics} isFavPhotoExist={favorites.length > 0} />

      {/*Passing down favorites and toggleFavorite as props.*/}
      <PhotoList 
      photos={photos}
      favorites={favorites} 
      toggleFavorite={toggleFavorite} 
      modal={modal} 
      toggleModalWithPhoto={toggleModalWithPhoto}
      />
    </div>
  );
};

export default HomeRoute;

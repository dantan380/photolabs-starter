import React from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ favorites, toggleFavorite }) => {
  return (
    <div className="home-route">

      {/*Setting the value of isFavPhotoExist to be a boolean.*/}
      <TopNavigation isFavPhotoExist={favorites.length > 0} />

      {/*Passing down favorites and toggleFavorite as props.*/}
      <PhotoList favorites={favorites} toggleFavorite={toggleFavorite} />
      
    </div>
  );
};

export default HomeRoute;

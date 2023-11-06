// import { useState } from "react";
import { useReducer } from "react";

export const ACTIONS = {
  FAVORITES: "favorite",
  ADD_FAVORITE: "addFavorite",
  REMOVE_FAVORITE: "removeFavorite",
  SET_PHOTO: "setPhoto",
  SET_TOPIC_DATA: "setTopicData",
  DISPLAY_PHOTO_DETAILS: 'displayPhotoDetails'
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_FAVORITE:
      return {...state, favorites: [...state.favorites, action.value]};
    case ACTIONS.REMOVE_FAVORITE:
      return {...state, favorites: state.favorites.filter((photoId) => {photoId !== action.value})};
    case ACTIONS.SET_PHOTO:
      return {...state, photo: action.value}
    case ACTIONS.SET_TOPIC_DATA:
      return {...state, topics: action.value}
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {...state, modal: action.value}
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
};

const initialState = {
  favorites: [],
  modal: false,
  photo: null,
  topics: []
};

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  // const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    state.favorites.includes(id) ? dispatch({ type: ACTIONS.REMOVE_FAVORITE, value: id}) : dispatch({ type: ACTIONS.ADD_FAVORITE, value: id});
  }

  const toggleModalWithPhoto = (photo) => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, value: !state.modal})
    state.modal === false ? dispatch({ type: ACTIONS.SET_PHOTO, value: photo}) : dispatch({ type: ACTIONS.SET_PHOTO, value: null})
  };

  // //Function to check if the photo-id of the liked photo is included in the favorites array.
  // const toggleFavorite = (id) => {
  //   if (favorites.includes(id)) {
  //     //If the element in favorites is equal to the given id, it produces a false boolean to remove it from favorites.
  //     return setFavorites([...favorites.filter((photoId) => photoId !== id)]);
  //   }
  //   //Otherwise, add the photo to favorites.
  //   setFavorites([...favorites, id])
  // };

  // const [modal, setModal] = useState(false);
  // const [photo, setPhoto] = useState(null);

  // const toggleModalWithPhoto = (photo) => {
  //   setModal(!modal);
  //   modal === false ? setPhoto(photo) : setPhoto(null)
  // };


  // return { favorites, modal, photo, toggleFavorite, toggleModalWithPhoto };
  return {
    state,
    toggleFavorite,
    toggleModalWithPhoto
  }
};

export default useApplicationData;
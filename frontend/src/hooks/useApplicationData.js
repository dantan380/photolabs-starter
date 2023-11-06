import { useEffect } from "react";
import { useReducer } from "react";
import axios from "axios";

export const ACTIONS = {
  FAVORITES: "favorite",
  ADD_FAVORITE: "addFavorite",
  REMOVE_FAVORITE: "removeFavorite",
  SET_PHOTO: "setPhoto",
  SET_PHOTO_DATA: "setPhotoData",
  SET_TOPIC_DATA: "setTopicData",
  DISPLAY_PHOTO_DETAILS: "displayPhotoDetails",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_FAVORITE:
      return { ...state, favorites: [...state.favorites, action.value] };
    case ACTIONS.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (photoId) => photoId !== action.value
        ),
      };
    case ACTIONS.SET_PHOTO:
      return { ...state, photo: action.value };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, modal: action.value };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

const initialState = {
  favorites: [],
  modal: false,
  photo: null,
  topicData: [],
  photoData: [],
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //useEffect for any side effects (things that our function is pulling from outside itself) that happen.
  useEffect(() => {
    const photosPromise = axios.get("/api/photos");
    const topicsPromise = axios.get("/api/topics");

    const promises = [photosPromise, topicsPromise];

    Promise.all(promises)
      .then((arrayOfPromises) => {
        const photos = arrayOfPromises[0];
        const topics = arrayOfPromises[1];

        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photos.data });
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topics.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const getPhotosByTopic = (topicId) => {
    axios
      .get(`/api/topics/photos/${topicId}`)
      .then((res) => {
        const photosOfTopic = res.data;
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photosOfTopic });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const toggleFavorite = (id) => {
    state.favorites.includes(id)
      ? dispatch({ type: ACTIONS.REMOVE_FAVORITE, value: id })
      : dispatch({ type: ACTIONS.ADD_FAVORITE, value: id });
  };

  const toggleModalWithPhoto = (photo) => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, value: !state.modal });
    state.modal === false
      ? dispatch({ type: ACTIONS.SET_PHOTO, value: photo })
      : dispatch({ type: ACTIONS.SET_PHOTO, value: null });
  };

  return {
    state,
    toggleFavorite,
    toggleModalWithPhoto,
    getPhotosByTopic,
  };
};

export default useApplicationData;

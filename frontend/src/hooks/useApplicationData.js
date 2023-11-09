import { useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "reducer/reducer";
import { ACTIONS } from "reducer/actions";

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

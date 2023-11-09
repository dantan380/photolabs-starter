import { ACTIONS } from "./actions";

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

export default reducer;
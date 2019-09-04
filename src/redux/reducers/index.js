import { ADD_ARTICLE, HANDLE_ERROR, REMOVE_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: [],
  canAdd: true
};

const rootReducer = ( state = initialState, action ) => {
  console.log( action );
  if (action.type === ADD_ARTICLE) {
    return {
      ...state,
      articles: [...state.articles, action.payload],
      canAdd: true
    };
  }
  if (action.type === REMOVE_ARTICLE) {
    const LG = state.articles.length - 1;
    return {
      ...state,
      articles: state.articles.filter( ( value, index ) => index !== LG ),
    };
  }
  if (action.type === HANDLE_ERROR) {
    return {
      ...state,
      canAdd: false
    }
  }

  return state
};

export default rootReducer;
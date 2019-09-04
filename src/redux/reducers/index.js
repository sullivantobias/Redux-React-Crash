import { ADD_ARTICLE, REMOVE_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: []
};

const rootReducer = ( state = initialState, action ) => {
  console.log( action );
  if (action.type === ADD_ARTICLE) {
    return {
      ...state,
      articles: [...state.articles, action.payload]
    };
  }
  if (action.type === REMOVE_ARTICLE) {
    const LG = state.articles.length - 1;
    return {
      ...state,
      articles: state.articles.filter((value, index ) => index !== LG)
    };
  }
  return state
};

export default rootReducer;
import { ADD_ARTICLE, REMOVE_ARTICLE } from "../constants/action-types";
import { handleError } from "../actions";

const forbiddenWords = ["spam", "money"];

export const errorMiddleware = ( { dispatch, getState } ) => {
  return function ( next ) {
    return function ( action ) {
      if (action.type === ADD_ARTICLE) {

        const foundWord = forbiddenWords.filter( word =>
          action.payload.title.includes( word )
        );
        if (foundWord.length || !action.payload.title) {
          return dispatch( handleError() );
        }
      }
      if (action.type === REMOVE_ARTICLE && getState().articles.length === 0) {
        alert( 'There is no article' );
        return
      }
      return next( action );
    };
  };
};
import { ADD_ARTICLE } from "../constants/action-types";
import { foundBadWord } from "../actions";

const forbiddenWords = ["spam", "money"];

export const forbiddenWordsMiddleware = ( { dispatch } ) => {
  return function ( next ) {
    return function ( action ) {
      if (action.type === ADD_ARTICLE) {

        const foundWord = forbiddenWords.filter( word =>
          action.payload.title.includes( word )
        );
        if (foundWord.length) {
          return dispatch( foundBadWord() );
        }
      }
      return next( action );
    };
  };
};
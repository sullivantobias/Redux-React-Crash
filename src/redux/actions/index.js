import { ADD_ARTICLE, FOUND_BAD_WORD, REMOVE_ARTICLE } from "../constants/action-types";

export const addArticle = payload => ( { type: ADD_ARTICLE, payload } );
export const removeArticle = () => ( { type: REMOVE_ARTICLE } );
export const foundBadWord = () => ( { type: FOUND_BAD_WORD } );
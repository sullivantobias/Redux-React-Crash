import { ADD_ARTICLE, REMOVE_ARTICLE } from "../constants/action-types";

export const addArticle = payload => ( { type: ADD_ARTICLE, payload } );
export const removeArticle = () => ( { type: REMOVE_ARTICLE } );
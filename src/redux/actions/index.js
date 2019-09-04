import { ADD_ARTICLE, HANDLE_ERROR, REMOVE_ARTICLE } from "../constants/action-types";

export const addArticle = payload => ( { type: ADD_ARTICLE, payload } );
export const removeArticle = () => ( { type: REMOVE_ARTICLE } );
export const handleError = () => ( { type: HANDLE_ERROR } );
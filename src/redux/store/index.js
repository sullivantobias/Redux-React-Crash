import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../reducers";
import { forbiddenWordsMiddleware } from "../middleware";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  storeEnhancers( applyMiddleware( forbiddenWordsMiddleware ) )
);


import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import App from "./App";

// show the store state after each action
store.subscribe( () => console.log( store.getState() ) );

render(
  <Provider store={ store }>
    <App/>
  </Provider>,

  document.getElementById( "root" )
);
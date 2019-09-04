import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addArticle, removeArticle, store } from "./redux/index";

store.subscribe( () => console.log( 'Action done' ) );

ReactDOM.render( <> <App/>
  <button onClick={ () => console.log( store.getState() ) }>Redux Store</button>
  <button onClick={ () => store.dispatch( addArticle( 'An Article' ) ) }>Redux Add Article</button>
  <button onClick={ () => store.dispatch( removeArticle() ) }>Redux Remove Last Article</button>
</>, document.getElementById( 'root' ) );

serviceWorker.unregister();

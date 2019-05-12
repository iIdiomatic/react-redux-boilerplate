
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import registerServiceWorker from "./registerServiceWorker";

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import  rootReducer  from "./app/reducers/rootReducer";
import rootSagas from "./app/sagas/rootSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// create a redux store with our reducer above and middleware
if(!rootReducer){
  console.log("undefined root reducer");
}
let store = createStore(
    rootReducer,
  compose(applyMiddleware(sagaMiddleware))
);

// run the saga
sagaMiddleware.run(rootSagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
//registerServiceWorker();
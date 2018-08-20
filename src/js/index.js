import { AppContainer } from 'react-hot-loader'
import { applyMiddleware, compose, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { render } from "react-dom"
import { Provider } from "react-redux"
import { Route, Switch } from 'react-router' // react-router v4
import { connectRouter, routerMiddleware } from 'connected-react-router'
import rootReducer from "./reducers"
import React from "react"
import App from "./App"
import socketListeners from './socket/listeners'
const history = createBrowserHistory()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
    ),
  ),
)
window.store = store;
render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
  document.getElementById("app")
);

history.listen((location, action) => {
  if(location.pathname.match(/\/rooms\/..*/i) != null){
      console.log('matched');
      return;
  }else{
      console.log('nope');
      return;
  }
});

socketListeners(store);

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./App', () => {
    render()
  })

  // Reload reducers
  module.hot.accept('./reducers', () => {
    store.replaceReducer(connectRouter(history)(rootReducer))
  })
}
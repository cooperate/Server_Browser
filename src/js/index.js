import { AppContainer } from 'react-hot-loader'
import { applyMiddleware, compose, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { render } from "react-dom"
import { Provider } from "react-redux"
import { Route, Switch } from 'react-router' // react-router v4
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { newUser } from "./actions/index"
import React from "react"
import store from "./store/index"
import App from "./components/App"
window.store = store;
window.newUser = newUser;
render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
  document.getElementById("app")
);
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
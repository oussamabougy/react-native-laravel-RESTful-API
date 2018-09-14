import React, { Component } from 'react';
import { Root } from "native-base";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
      	<Root>
          <Router />
        </Root>
      </Provider>
    );
  }
}

export default App;

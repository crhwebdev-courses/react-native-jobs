import React from 'react';
import { Provider } from 'react-redux';
import MainNavigation from './MainNavigation';
import store from './store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    );
  }
}

import React from 'react';
import { Provider } from 'react-redux';
import MainNavigation from './MainNavigation';
import store from './store';
import registerForNotifications from './services/push_notifications';

export default class App extends React.Component {
  componentDidMount() {
    registerForNotifications();
  }

  render() {
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    );
  }
}

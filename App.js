import React from 'react';
import { Provider } from 'react-redux';
import { Notifications } from 'expo';
import { Alert } from 'react-native';
import MainNavigation from './MainNavigation';
import store from './store';
// import registerForNotifications from './services/push_notifications';

export default class App extends React.Component {
  componentDidMount() {
    registerForNotifications();
    Notifications.addListener(notification => {
      const {
        data: { text },
        origin
      } = notification;
      if (origin === 'recieved' && text) {
        Alert.alert('New Push Notification', text, [{ text: 'Ok.' }]);
      }
    });
  }

  render() {
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    );
  }
}

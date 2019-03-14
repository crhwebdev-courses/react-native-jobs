import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'redux-persist';
import axios from 'axios';

const PUSH_ENDPOINT = 'http://rallycoding.herokuapp.com/api/tokens';

export default async () => {
  let previousToken = await AsyncStorage.getItem('pushtoken');

  if (previousToken) {
    return;
  } else {
    let { status } = await Permissions.askAsync(
      Permissions.REMOTE_NOTIFICATIONS
    );

    if (status !== 'granted') {
      return;
    }

    let token = await Notifications.getExpoPushTokenAsync();
    await axios.post(PUSH_ENDPOINT, { token: { token } });
    await AsyncStorage.setItem('pushtoken', token);
  }
};
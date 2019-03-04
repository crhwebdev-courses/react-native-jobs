import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

import {
  FACEBOOK_LOGIN_SUCESS,
  FACEBOOK_LOGIN_FAIL,
  FACEBOOK_LOGIN_SUCCESS
} from './types';
import facebookCredentials from '../credentials/facebook.json';

/* How to use AsyncStorage:
 AsyncStorage.setItem('key_name', data);
 AsyncStorage.getItem('key_name');
*/

//return an async function from the async action to make use of
//redux-thunk
export const facebookLogin = () => async dispatch => {
  //Check to see if login token exists in AsyncStorage
  let token = await AsyncStorage.getItem('fb_token');
  if (token) {
    // Dispatch an action saying FB login is done
    dispatch({ type: FACEBOOK_LOGIN_SUCESS, payload: token });
  } else {
    // Start up FB Login process
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async dispatch => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync(
    facebookCredentials.appId,
    {
      permissions: ['public_profile']
    }
  );

  if (type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }

  await AsyncStorage.setItem('fb_token', token);

  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};

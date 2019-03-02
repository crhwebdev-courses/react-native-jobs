import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import WelecomScreen from './screens/WelecomeScreen';
import AuthScreen from './screens/AuthScreen';

//create TabNavigator
const BottomNavigator = createBottomTabNavigator({
  welecome: WelecomScreen,
  auth: AuthScreen
});

export default createAppContainer(BottomNavigator);

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import WelecomScreen from './screens/WelecomeScreen';
import AuthScreen from './screens/AuthScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';

//Tab navigation for main app flow
const MainFlowNavigator = createBottomTabNavigator({
  map: MapScreen,
  deck: DeckScreen
});

//Top level Tab navigation which contains initial secreens (Welcome and Auth)
// and main flow
const MainNavigator = createBottomTabNavigator({
  welecome: WelecomScreen,
  auth: AuthScreen,
  main: MainFlowNavigator
});

//Note: we only need to wrap top level navigation in createAppContainer
export default createAppContainer(MainNavigator);

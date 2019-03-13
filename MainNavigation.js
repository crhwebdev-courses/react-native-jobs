import React from 'react';
import { Text } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import { Icon } from 'react-native-elements';

import WelecomScreen from './screens/WelecomeScreen';
import AuthScreen from './screens/AuthScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';

//Stack navigation for ReviewScreen and SettingsScreen
const ReviewFlowNavigator = createStackNavigator({
  review: ReviewScreen,
  settings: SettingsScreen
});

ReviewFlowNavigator.navigationOptions = {
  tabBarLabel: ({ tintColor }) => (
    <Text style={{ fontSize: 14, textAlign: 'center', color: tintColor }}>
      Review
    </Text>
  ),
  tabBarIcon: ({ tintColor }) => {
    return <Icon name="favorite" size={30} color={tintColor} />;
  }
};

//Tab navigation for main app flow
const MainFlowNavigator = createBottomTabNavigator({
  map: MapScreen,
  deck: DeckScreen,
  review: ReviewFlowNavigator
});

//Top level Tab navigation which contains initial secreens (Welcome and Auth)
// and main flow
const MainNavigator = createBottomTabNavigator(
  {
    welecome: WelecomScreen,
    auth: AuthScreen,
    main: MainFlowNavigator
  },
  {
    defaultNavigationOptions: {
      tabBarVisible: false
    }
  }
);

const MainNavigatorContainer = createAppContainer(MainNavigator);

//Note: we only need to wrap top level navigation in createAppContainer
export default MainNavigatorContainer;

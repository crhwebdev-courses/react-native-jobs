import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
  /*
    navigationOptions can take either an configuration object or an arrow function
    that returns a configuration object.

    use an arrow function if you need to make items on the components props object 
    available within the configuration object -- for instance, passing the navigation object
    to handle button presses
   */
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Review Jobs',
      headerRight: (
        <Button
          title="Settings"
          type="clear"
          onPress={() => navigation.navigate('settings')}
        />
      )
    };
  };

  render() {
    return (
      <View>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}

export default ReviewScreen;

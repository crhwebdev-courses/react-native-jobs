import React, { Component } from 'react';
import { connect } from 'react-redux';
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

function mapStateToProps({ likedJobs }) {
  return { likedJobs };
}

export default connect(mapStateToProps)(ReviewScreen);

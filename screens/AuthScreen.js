import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, AsyncStorage } from 'react-native';
import { facebookLogin } from '../actions';

import styles from './styles';

class AuthScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarVisible: false
    };
  };

  componentWillMount() {
    this.props.facebookLogin();
    // AsyncStorage.removeItem('fb_token');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { token: auth.token };
};

export default connect(
  mapStateToProps,
  { facebookLogin }
)(AuthScreen);

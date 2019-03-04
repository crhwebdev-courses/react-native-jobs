import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, AsyncStorage } from 'react-native';
import { facebookLogin } from '../actions';

import styles from './styles';

class AuthScreen extends Component {
  componentWillMount() {
    this.props.facebookLogin();
    // AsyncStorage.removeItem('fb_token');
    this.onAuthComplete(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('map');
    }
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

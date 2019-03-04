import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { facebookLogin } from '../actions';

import styles from './styles';

class AuthScreen extends Component {
  componentWillMount() {
    this.props.facebookLogin();
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

export default connect(
  null,
  { facebookLogin }
)(AuthScreen);

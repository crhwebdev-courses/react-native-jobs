import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class DeckScreen extends Component {
  render() {
    return (
      <View>
        <Text>Decks</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ jobs }) => {
  return { jobs: jobs.results };
};

export default connect(mapStateToProps)(DeckScreen);

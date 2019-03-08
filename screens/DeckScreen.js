import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import Swipe from '../components/Swipe';

class DeckScreen extends Component {
  render() {
    return (
      <View>
        <Swipe data={this.props.jobs} />
      </View>
    );
  }
}

const mapStateToProps = ({ jobs }) => {
  return { jobs: jobs.results };
};

export default connect(mapStateToProps)(DeckScreen);

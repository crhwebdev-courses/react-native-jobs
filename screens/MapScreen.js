import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import { MapView } from 'expo';
import { fetchJobs } from '../actions';

class MapScreen extends Component {
  state = {
    mapLoaded: false,
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  };

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  onRegionChangeComplete = region => {
    this.setState({ region });
  };

  onButtonPress = () => {
    this.props.fetchJobs(this.state.region);
  };

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
        <View style={styles.buttonContainer}>
          <Button
            large
            title="Search this area"
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTitleStyle}
            icon={{ name: 'search' }}
            onPress={this.onButtonPress}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 10
  },
  buttonStyle: {
    backgroundColor: '#009688'
  },
  buttonTitleStyle: {
    fontSize: 20
  }
};

export default connect(
  null,
  { fetchJobs }
)(MapScreen);

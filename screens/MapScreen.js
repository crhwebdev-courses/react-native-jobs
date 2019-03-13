import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Platform, ActivityIndicator } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { MapView, Location, Constants, Permissions } from 'expo';
import { fetchJobs } from '../actions';

class MapScreen extends Component {
  static navigationOptions = {
    tabBarLabel: ({ tintColor }) => (
      <Text style={{ fontSize: 14, textAlign: 'center', color: tintColor }}>
        Map
      </Text>
    ),
    size: 20,
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="my-location" size={30} color={tintColor} />;
    }
  };

  state = {
    mapLoaded: false,
    errorMessage: '',
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage:
          'Oops, this will not work on Sketch in an Android emulator. Try it on your device!'
      });
    } else {
      this.getLocationAsync();
    }
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied'
      });
    }
  };

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  onRegionChangeComplete = region => {
    this.setState({ region });
  };

  onButtonPress = () => {
    this.props.fetchJobs(this.state.region, () => {
      this.props.navigation.navigate('deck');
    });
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, Linking } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { MapView } from 'expo';

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

  renderLikedJobs() {
    const getDateDifferenceInDays = (time1, time2) => {
      dateDifference = Math.abs(time1 - time2);
      return Math.ceil(dateDifference / (1000 * 3600 * 24));
    };

    return this.props.likedJobs.map(job => {
      const { id, company, created_at, url, region, title } = job;

      const initialRegion = {
        longitude: region ? region.longitude : 0,
        latitude: region ? region.latitude : 0,
        latitudeDelta: region ? region.latitudeDelta : 0.09,
        longitudeDelta: region ? region.longitudeDelta : 0.04
      };

      return (
        <Card title={title} key={id}>
          <View style={{ height: 200 }}>
            <MapView
              style={{ flex: 1 }}
              cacheEnabled={false}
              scrollEnabled={false}
              initialRegion={initialRegion}
            />
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{company}</Text>
              <Text style={styles.italics}>
                {getDateDifferenceInDays(Date.now(), new Date(created_at))} days
                ago
              </Text>
            </View>
            <Button
              title="Apply Now!"
              buttonStyle={{ backgroundColor: '#03A9F4' }}
              onPress={() => Linking.openURL(url)}
            />
          </View>
        </Card>
      );
    });
  }

  render() {
    return (
      <View>
        <ScrollView>{this.renderLikedJobs()}</ScrollView>
        <Text>{this.props.likedJobs.length}</Text>
      </View>
    );
  }
}

const styles = {
  detailWrapper: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  italics: {
    fontStyle: 'italic'
  }
};

function mapStateToProps({ likedJobs }) {
  return { likedJobs };
}

export default connect(mapStateToProps)(ReviewScreen);

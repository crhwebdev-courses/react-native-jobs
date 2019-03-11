import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-elements';

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
      return (
        <Card key={job.id}>
          <View style={{ height: 200 }}>
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{job.company}</Text>
              <Text style={styles.italics}>
                {getDateDifferenceInDays(Date.now(), new Date(job.created_at))}{' '}
                days ago
              </Text>
            </View>
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

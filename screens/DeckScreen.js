import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements';
import Swipe from '../components/Swipe';

class DeckScreen extends Component {
  renderCard(job) {
    const getDateDifferenceInDays = (time1, time2) => {
      dateDifference = Math.abs(time1 - time2);
      return Math.ceil(dateDifference / (1000 * 3600 * 24));
    };

    return (
      <Card title={job.title}>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>
            {getDateDifferenceInDays(Date.now(), new Date(job.created_at))} days
          </Text>
        </View>
        <View style={styles.detailWrapper} />

        <Text>{job.description.split('\r\n\r\n')[0]}</Text>
      </Card>
    );
  }

  renderNoMoreCards() {
    return <Card title="No more jobs" />;
  }

  render() {
    return (
      <View>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
};

const mapStateToProps = ({ jobs }) => {
  return { jobs: jobs.results };
};

export default connect(mapStateToProps)(DeckScreen);

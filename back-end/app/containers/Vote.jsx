import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import EntryBox from 'components/EntryBox';
import MainSection from 'components/MainSection';
import Scoreboard from 'components/Scoreboard';
import { createTopic, typing, incrementCount,
  decrementCount, destroyTopic, fetchTopics, pauseTopic } from 'actions/topics';
import { tickEvent } from 'actions/time';
import styles from 'css/components/vote';

const cx = classNames.bind(styles);

class Vote extends Component {

  render() {
    const {newTopic, topics, isAuth, typing, createTopic, destroyTopic, incrementCount, decrementCount, tickEvent, pauseTopic } = this.props;
    // setInterval(() => tickEvent(), 1000);
    return (
      <div className={cx('vote')}>
        <EntryBox topic={newTopic}
          onEntryChange={typing}
          onEntrySave={createTopic} />
        <MainSection topics={topics}
          onIncrement={incrementCount}
          onDecrement={decrementCount}
          onDestroy={destroyTopic}
          onPauseTopic={pauseTopic} />
        <Scoreboard topics={topics} tickEvent={tickEvent}/>
      </div>
    );
  }
}

Vote.propTypes = {
  tickEvent: PropTypes.func.isRequired,
  topics: PropTypes.array.isRequired,
  typing: PropTypes.func.isRequired,
  createTopic: PropTypes.func.isRequired,
  destroyTopic: PropTypes.func.isRequired,
  pauseTopic: PropTypes.func.isRequired,
  incrementCount: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired,
  newTopic: PropTypes.string
};

function mapStateToProps(state) {
  return {
    topics: state.topic.topics,
    newTopic: state.topic.newTopic,
    isAuth: state.user.authenticated
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, { createTopic, typing, incrementCount, decrementCount, destroyTopic, tickEvent, pauseTopic })(Vote);

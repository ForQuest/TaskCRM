import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { Tasks } from 'modules';
import * as tickEvents from 'actions/time';
import styles from 'css/gridComponent';

const cx = classNames.bind(styles);

class Vote extends Component {

  componentWillMount () {
    this.props.fetchTopics();
    this.props.tickStart();
  }

  componentWillUnmount() {
    this.props.tickStop();
  }
  
  render() {
    const {newTopic, topics, isAuth, typing, createTopic, destroyTopic, incrementCount, decrementCount, pauseTopic } = this.props;
    
    return (
      <div className={cx('container','glyphicon')}>
        <div className={cx('row')}>
          <div className={cx('col-md-12')}>
            <Tasks.Components.EntryBox topic={newTopic}
              onEntryChange={typing}
              onEntrySave={createTopic} />
          </div>
          <div className={cx('col-md-6')}>
            <Tasks.Components.MainSection topics={topics}
              onIncrement={incrementCount}
              onDecrement={decrementCount}
              onDestroy={destroyTopic}
              onPauseTopic={pauseTopic} />
          </div>
          <div className={cx('col-md-6')}>
            <Tasks.Components.Scoreboard topics={topics} />
          </div>
        </div>
      </div>
    );
  }
}

Vote.propTypes = {
  fetchTopics: PropTypes.func.isRequired,
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
export default connect(mapStateToProps, { ...Tasks.Actions, ...tickEvents })(Vote);

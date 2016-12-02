import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from 'css/components/scoreboard';
import * as lib from 'lib';

const cx = classNames.bind(styles);

class Scoreboard extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.timer = setInterval(() => this.props.tickEvent(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  renderTopicList(){
    const { topics } = this.props;
    return topics.map((topic, key) => {
      let date = new Date((topic.stopDate?Date.parse(topic.stopDate):Date.now()) - Date.parse(topic.startDate))
      let days = date.toFormatLocale('year')+' ';
      days += date.toFormatLocale('month')+' ';
      days += date.toFormatLocale('day')+' ';
      date = date.toFormatString('%H:%M:%S');
      
      return (
        <li className={cx('item')} key={key}>
          <span className={cx('topic')}>{topic.text}</span>
          <span className={cx('count')}>{days+date}</span>
          <span className={cx('count')}>{topic.count}</span>
        </li>);
    });
  }

  render() {
    return (
      <div className={cx('scoreboard')}>
        <h3 className={cx('header')}>Vote count</h3>
        <ul className={cx('list')}>
          {this.renderTopicList()}
        </ul>
      </div>
    );
  }
};

Scoreboard.propTypes = {
  topics: PropTypes.array.isRequired,
  tickEvent: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    tick: state.tick
  };
}

export default connect(mapStateToProps)(Scoreboard);

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from 'css/bootstrap';

const cx = classNames.bind(styles);

const TopicItem = ({ text, id, incrementCount, decrementCount, destroyTopic, pauseTopic, pauseToggle }) => {
  const onIncrement = () => {
    incrementCount(id);
  };
  const onDecrement = () => {
    decrementCount(id);
  };
  const onDestroy = () => {
    destroyTopic(id);
  };
  const onStop = () => {
    pauseTopic(id);
  };

  return (
    <li className={cx('topic-item')} key={id}>
      <span className={cx('topic')}>{text}</span>
      <button
        className={cx('btn','badge','btn-default', 'increment')}
        onClick={onIncrement}>+</button>
      <button
        className={cx('btn','badge','btn-default', 'decrement')}
        onClick={onDecrement}>-</button>
      <button
        className={cx('btn','badge','btn-default', 'destroy')}
        onClick={onDestroy}>{String.fromCharCode(215)}</button>
      <button
        className={cx('btn','badge','btn-default', 'decrement')}
        onClick={onStop}>{String.fromCharCode(pauseToggle?9654:9632)}</button>
    </li>
  );
};

TopicItem.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  incrementCount: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired,
  destroyTopic: PropTypes.func.isRequired,
  pauseTopic: PropTypes.func.isRequired
};

export default TopicItem;

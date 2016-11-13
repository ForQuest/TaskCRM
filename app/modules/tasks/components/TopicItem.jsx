import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/topic-item';

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
        className={cx('button', 'increment')}
        onClick={onIncrement}>+</button>
      <button
        className={cx('button', 'decrement')}
        onClick={onDecrement}>-</button>
      <button
        className={cx('button', 'destroy')}
        onClick={onDestroy}>{String.fromCharCode(215)}</button>
      <button
        className={cx('button', 'decrement')}
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

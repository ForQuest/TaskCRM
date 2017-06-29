import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/bootstrap';

const cx = classNames.bind(styles);

class Footer extends Component {
  render() {
    return (
      <footer className={cx('main-footer')}>
        <div className={cx('pull-right','hidden-xs')}>
          Заведение "Лофт 3 Этаж"
        </div>
        <strong>TaskCRM &copy; 2017 <a href="#">ForQuest LLC.</a>.</strong> All rights reserved.
      </footer>
    );
  }
}

export default Footer;
import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/bootstrap';

const cx = classNames.bind(styles);

class Footer extends Component {
  render() {
    return (
      <footer className={cx('main-footer')}>
        <div className={cx('pull-right','hidden-xs')}>
          Anything you want
        </div>
        <strong>Copyright &copy; 2016 <a href="#">Company</a>.</strong> All rights reserved.
      </footer>
    );
  }
}

export default Footer;
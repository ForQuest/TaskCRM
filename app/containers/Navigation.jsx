import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';
import { logOut } from 'actions/users';

import classNames from 'classnames/bind';
import styles from 'css/components/navigation';

const cx = classNames.bind(styles);

const Navigation = ({ user, logOut }) => {
    return (
      <nav className={cx('navigation')} role="navigation">
        <span className={cx('item', 'logo', 'active')} >TaskCRM</span>
        <IndexLink className={cx('item')} activeClassName={cx('active')} to="/" >Главная</IndexLink>
        <Link className={cx('item')} activeClassName={cx('active')} to="/about" >Тест</Link>
        { user.authenticated ? (
          <Link className={cx('item')} activeClassName={cx('active')} onClick={logOut} >Выйти</Link>
        ) : (
          <Link className={cx('item')} activeClassName={cx('active')} to="/login">Войти</Link>
        )}
      </nav>
    );
};

Navigation.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { logOut }, null, {pure:false})(Navigation);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navigation from 'containers/Navigation';
import Message from 'containers/Message';
import LoginOrRegister from 'containers/LoginOrRegister';
import classNames from 'classnames/bind';
import styles from 'css/main';

const cx = classNames.bind(styles);


/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.jsx` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 */
const App = ({auth, children}) => {
  if(auth){
    return (
      <div className={cx('app')}>
        <Navigation />
        <Message />
          {children}
      </div>
    );
  } else {
    return (
      <div className={cx('app')}>
        <LoginOrRegister />
      </div>
    );
  }
};

App.propTypes = {
  auth: PropTypes.bool,
  children: PropTypes.object
};

function mapStateToProps(state) {
  return {
    auth: state.user.authenticated
  };
}

export default connect(mapStateToProps)(App);
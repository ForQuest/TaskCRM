import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navigation from 'containers/Navigation';
import Message from 'containers/Message';
import LoginOrRegister from 'containers/LoginOrRegister';
import classNames from 'classnames/bind';
import bootstrap from 'css/bootstrap';

const cx = classNames.bind(bootstrap);


/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.jsx` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 */

class App extends Component {

  componentWillMount () {
    document.body.classList.toggle(cx('skin-blue'));
  }

  componentWillUnmount() {
    document.body.classList.toggle(cx('skin-blue'));
  }
  
  render(){
    const { auth, children } = this.props;
    if(auth){
      return (
        <div className={cx('wrapper')}>
          <Navigation />
          <Message />
          <div className={cx('container')}>
            {children}
          </div>
        </div>
      );
    } else {
      return (
        <div className={cx('container')}>
          <LoginOrRegister />
        </div>
      );
    }
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
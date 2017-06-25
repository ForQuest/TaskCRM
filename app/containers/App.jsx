import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Navigation from 'containers/Navigation';
import ASide from 'containers/ASide';
import Message from 'containers/Message';
import LoginOrRegister from 'containers/LoginOrRegister';

import Footer from 'containers/Footer';
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
    document.body.classList.toggle(cx('hold-transition'));
    document.body.classList.toggle(cx('skin-blue'));
    document.body.classList.toggle(cx('sidebar-mini'));
  }

  componentWillUnmount() {
    document.body.classList.toggle(cx('hold-transition'));
    document.body.classList.toggle(cx('skin-blue'));
    document.body.classList.toggle(cx('sidebar-mini'));
  }
  
  render(){
    const { auth, isWaiting, children } = this.props;

    if(auth){
      return (
        <div className={cx('wrapper')}>
        <div className={cx('pace',{
          'pace-active': isWaiting,
          'pace-inactive': !isWaiting
          })}>
          <div className={cx('pace-activity')}></div>
        </div>
          <Navigation />
          <ASide />
          <div className={cx('content-wrapper')}>
            <section>
              <Message />
            </section>
            <section className={cx('content-header')}>
              <h1>
                Page Header
                <small>Optional description</small>
              </h1>
              <ol className={cx('breadcrumb')}>
                <li><a href="#"><i className={cx('fa','fa-dashboard')}></i> Level</a></li>
                <li className={cx('active')}>Here</li>
              </ol>
            </section>
            <section className={cx('content')}>
              {children}
            </section>
          </div>
          <Footer />
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
  isWaiting: PropTypes.bool,
  children: PropTypes.object
};

function mapStateToProps(state) {
  return {
    auth: state.user.authenticated,
    isWaiting: state.user.isWaiting
  };
}

export default connect(mapStateToProps)(App);
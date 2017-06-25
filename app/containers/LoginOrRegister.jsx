import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { passwordLogin } from 'actions/users';
import styles from 'css/bootstrap';
import hourGlassSvg from 'images/hourglass.svg';

const cx = classNames.bind(styles);

class LoginOrRegister extends Component {
  /*
   * This replaces getInitialState. Likewise getDefaultProps and propTypes are just
   * properties on the constructor
   * Read more here: https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#es6-classes
   */
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  componentWillMount () {
    document.body.classList.toggle(cx('login-page'))
  }

  componentWillUnmount() {
    document.body.classList.toggle(cx('login-page'))    
  }
  handleOnSubmit(event) {
    event.preventDefault();

    const { passwordLogin } = this.props;
    const username = ReactDOM.findDOMNode(this.refs.email).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;

    passwordLogin({ username, password });
  }

  render() {
    const { isWaiting, message } = this.props.user;
    return (
      <div className={cx('login-box')}>
        <div className={cx('login-logo')}>
          <a href="/"><b>Task</b>CRM</a>
        </div>
        <div className={cx('login-box-body')}>
          <p className={cx('login-box-msg')}>Войдите, чтобы начать работу</p>

          <form onSubmit={this.handleOnSubmit}>
            <div className={cx('form-group','has-feedback')}>
              <input type="email" className={cx('form-control')} ref="email" placeholder="Email" />
              <span className={cx('fa','fa-envelope','form-control-feedback')}></span>
            </div>
            <div className={cx('form-group','has-feedback')}>
              <input type="password" className={cx('form-control')} ref="password" placeholder="Password" />
              <span className={cx('fa','fa-lock','form-control-feedback')}></span>
            </div>
            <div className={cx('row')}>
              <div className={cx('col-xs-4','col-xs-offset-8')}>
                <button type="submit" className={cx('btn','btn-primary','btn-block','btn-flat')}>Войти</button>
              </div>
            </div>
          </form>

          <div className={cx('social-auth-links','text-center')}>
            <p>{message}</p>
          </div>
        </div>
      </div>
    );
  }
}

LoginOrRegister.propTypes = {
  user: PropTypes.object,
  passwordLogin: PropTypes.func.isRequired
};

// Function passed in to `connect` to subscribe to Redux store updates.
// Any time it updates, mapStateToProps is called.
function mapStateToProps({user}) {
  return {
    user
  };
}

// Connects React component to the redux store
// It does not modify the component class passed to it
// Instead, it returns a new, connected component class, for you to use.
export default connect(mapStateToProps, { passwordLogin })(LoginOrRegister);


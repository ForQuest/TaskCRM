import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { passwordLogin, signUp } from 'actions/users';
import styles from 'css/components/login';
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

  handleOnSubmit(event) {
    event.preventDefault();

    const { passwordLogin, signUp } = this.props;
    const username = ReactDOM.findDOMNode(this.refs.email).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;

    passwordLogin({ username, password });
  }

  render() {
    const { isWaiting, message } = this.props.user;

    return (
      <div className={cx('login', {
        waiting: isWaiting
      })}>
        <div className={cx('container')}>
          <div className={cx('header')}>
            <h1 className={cx('heading')}>TaskCRM preAlpha</h1>
          </div>
          <img className={cx('loading')} src={hourGlassSvg} />
          <div className={cx('email-container')}>
            <form onSubmit={this.handleOnSubmit}>
              <input className={cx('input')}
              type="email"
              ref="email"
              placeholder="Email" />
              <input className={cx('input')}
              type="password"
              ref="password"
              placeholder="Пароль" />
              <div className={cx('hint')}>
              <div>Подсказка</div>
              <div>email: a@a password: asd</div>
              </div>
              <p className={cx('message', {
                'message-show': message && message.length > 0
              })}>{message}</p>
              <input className={cx('button')}
                type="submit"
                value='Войти' />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

LoginOrRegister.propTypes = {
  user: PropTypes.object,
  passwordLogin: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired
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
export default connect(mapStateToProps, { passwordLogin, signUp })(LoginOrRegister);


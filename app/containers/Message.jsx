import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames/bind';
import { dismissMessage } from 'actions/messages';
import styles from 'css/components/message';

const cx = classNames.bind(styles);

class Message extends Component {
  componentWillMount () {
    setTimeout((() => this.props.dismissMessage()).bind(this), 5000);
  }

  render () {
    const { message, type, dismissMessage } = this.props;

    return (
      <div className={cx('message', {
        show: message && message.length > 0,
        success: type === 'SUCCESS',
        error: type === 'ERROR'
      })} onClick={dismissMessage}>{message}</div>
    )
  }
}

Message.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
  dismissMessage: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({ ...state.message });

export default connect(mapStateToProps, { dismissMessage })(Message);

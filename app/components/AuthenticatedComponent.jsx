import React from 'react';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';

export default function requireAuthentication(Component) {
  class AuthenticatedComponent extends React.Component {

    componentWillMount () {
      this.checkAuth(this.props.isAuthenticated);
    }

    componentWillReceiveProps (nextProps) {
      this.checkAuth(nextProps.isAuthenticated);
    }

    checkAuth (isAuthenticated) {
      if (!isAuthenticated) {
        let redirectAfterLogin = this.props.location.pathname;
        this.props.dispatch(push('/login'));
      }
    }

    render () {
      if(this.props.isAuthenticated === true) return (<Component {...this.props}/>)
    }
  }

  const mapStateToProps = (state) => ({
    isAuthenticated: state.user.authenticated
  });

  return connect(mapStateToProps)(AuthenticatedComponent);
}

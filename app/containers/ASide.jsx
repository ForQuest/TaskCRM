import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logOut } from 'actions/users';
import user2 from 'images/user2-160x160.jpg';
import classNames from 'classnames/bind';
import styles from 'css/bootstrap';
import { Navbar, NavbarToggler, NavbarBrand, Collapse } from 'reactstrap';

const cx = classNames.bind(styles);

const ASide = ({ user, logOut }) => {
    return (
      <aside className={cx('main-sidebar')}>
        <section className={cx('sidebar')}>
          <div className={cx('user-panel')}>
            <div className={cx('pull-left','image')}>
              <img src={user2} className={cx('img-circle')} alt="User Image" />
            </div>
            <div className={cx('pull-left','info')}>
              <p>Alexander Pierce</p>
              <a href="#"><i className={cx('fa','fa-circle','text-success')}></i> Online</a>
            </div>
          </div>
          <form action="#" method="get" className={cx('sidebar-form')}>
            <div className={cx('input-group')}>
              <input type="text" name="q" className={cx('form-control')} placeholder="Search..." />
                <span className={cx('input-group-btn')}>
                  <button type="submit" name="search" id="search-btn" className={cx('btn','btn-flat')}>
                    <i className={cx('fa','fa-search')}></i>
                  </button>
                </span>
            </div>
          </form>
          <ul className={cx('sidebar-menu')}>
            <li className={cx('header')}>Навигация</li>
            <li>
              <Link activeClassName={cx('active')} to='/' >
                <i className={cx('fa','fa-link')}></i> <span>Главная</span>
              </Link>
            </li>
            <li>
            <Link activeClassName={cx('active')} to='/about'>
              <i className={cx('fa','fa-link')}></i> <span>About</span>
            </Link>
            </li>
            <li>
            { user.authenticated ? (
              <Link activeClassName={cx('active')} onClick={logOut}>
                <i className={cx('fa','fa-link')}></i> <span>Выйти</span>
              </Link>
            ) : (
              <Link activeClassName={cx('active')} to="/login">
                <i className={cx('fa','fa-link')}></i> <span>Войти</span>
              </Link>
            )}
            </li>
          </ul>
        </section>
      </aside>
    );
};

ASide.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { logOut }, null, {pure:false})(ASide);

/*

      <nav className={cx('navbar','navbar-toggleable-md','navbar-inverse','bg-inverse')} role="navigation">
        <button className={cx('navbar-toggler','navbar-toggler-right')} type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className={cx('navbar-toggler-icon')}></span>
        </button>
        <span className={cx('navbar-brand')} >TaskCRM</span>
        <ul className={cx('navbar-nav','mr-auto')}>
          <li className={cx('nav-item')}>
            <IndexLink className={cx('nav-link')} activeClassName={cx('active')} to="/" >Главная</IndexLink>
          </li>
          <li className={cx('nav-item')}>
            <Link className={cx('nav-link')} activeClassName={cx('active')} to="/about" >Тест</Link>
          </li>
          <li className={cx('nav-item')}>
            { user.authenticated ? (
              <Link className={cx('nav-link')} activeClassName={cx('active')} onClick={logOut} >Выйти</Link>
            ) : (
              <Link className={cx('nav-link')} activeClassName={cx('active')} to="/login">Войти</Link>
            )}
          </li>
        </ul>
      </nav>

 */
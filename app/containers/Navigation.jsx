import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';
import { logOut } from 'actions/users';
import user2 from 'images/user2-160x160.jpg';
import classNames from 'classnames/bind';
import styles from 'css/bootstrap';
import { Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

const cx = classNames.bind(styles);

const Navigation = ({ user, logOut }) => {
    return (
      <header className={cx('main-header')}>

        <a href="index2.html" className={cx('logo')}>
          <span className={cx('logo-mini')}><b>A</b>LT</span>
          <span className={cx('logo-lg')}><b>Admin</b>LTE</span>
        </a>

        <nav className={cx('navbar','navbar-static-top')} role="navigation">
          <a href="#" className={cx('sidebar-toggle')} data-toggle="offcanvas" role="button">
            <span className={cx('sr-only')}>Toggle navigation</span>
          </a>
          <div className={cx('navbar-custom-menu')}>
            <ul className={cx('nav','navbar-nav')}>
              <li className={cx('dropdown','messages-menu')}>
                <a href="#" className={cx('dropdown-toggle')} data-toggle="dropdown">
                  <i className={cx('fa','fa-envelope-o')}></i>
                  <span className={cx('label','label-success')}>4</span>
                </a>
                <ul className={cx('dropdown-menu')}>
                  <li className={cx('header')}>You have 4 messages</li>
                  <li>
                    <ul className={cx('menu')}>
                      <li>
                        <a href="#">
                          <div className={cx('pull-left')}>
                            <img src={user2} className={cx('img-circle')} alt="User Image"/>
                          </div>
                          <h4>
                            Support Team
                            <small><i className={cx('fa','fa-clock-o')}></i> 5 mins</small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className={cx('footer')}><a href="#">See All Messages</a></li>
                </ul>
              </li>

              <li className={cx('dropdown','notifications-menu')}>
                <a href="#" className={cx('dropdown-toggle')} data-toggle="dropdown">
                  <i className={cx('fa','fa-bell-o')}></i>
                  <span className={cx('label','label-warning')}>10</span>
                </a>
                <ul className={cx('dropdown-menu')}>
                  <li className={cx('header')}>You have 10 notifications</li>
                  <li>
                    <ul className={cx('menu')}>
                      <li>
                        <a href="#">
                          <i className={cx('fa','fa-users','text-aqua')}></i> 5 new members joined today
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className={cx('footer')}><a href="#">View all</a></li>
                </ul>
              </li>
              <li className={cx('dropdown','tasks-menu')}>
                <a href="#" className={cx('dropdown-toggle')} data-toggle="dropdown">
                  <i className={cx('fa','fa-flag-o')}></i>
                  <span className={cx('label','label-danger')}>9</span>
                </a>
                <ul className={cx('dropdown-menu')}>
                  <li className={cx('header')}>You have 9 tasks</li>
                  <li>
                    <ul className={cx('menu')}>
                      <li>
                        <a href="#">
                          <h3>
                            Design some buttons
                            <small className={cx('pull-right')}>20%</small>
                          </h3>
                          <div className={cx('progress','xs')}>
                            <div className={cx('progress-bar','progress-bar-aqua')} style={{width: "20%"}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                              <span className={cx('sr-only')}>20% Complete</span>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className={cx('footer')}>
                    <a href="#">View all tasks</a>
                  </li>
                </ul>
              </li>
              <li className={cx('dropdown','user','user-menu')}>
                <a href="#" className={cx('dropdown-toggle')} data-toggle="dropdown">
                  <img src={user2} className={cx('user-image')} alt="User Image"/>
                  <span className={cx('hidden-xs')}>Alexander Pierce</span>
                </a>
                <ul className={cx('dropdown-menu')}>
                  <li className={cx('user-header')}>
                    <img src={user2} className={cx('img-circle')} alt="User Image"/>

                    <p>
                      Alexander Pierce - Web Developer
                      <small>Member since Nov. 2012</small>
                    </p>
                  </li>
                  <li className={cx('user-body')}>
                    <div className={cx('row')}>
                      <div className={cx('col-xs-4','text-center')}>
                        <a href="#">Followers</a>
                      </div>
                      <div className={cx('col-xs-4','text-center')}>
                        <a href="#">Sales</a>
                      </div>
                      <div className={cx('col-xs-4','text-center')}>
                        <a href="#">Friends</a>
                      </div>
                    </div>
                  </li>
                  <li className={cx('user-footer')}>
                    <div className={cx('pull-left')}>
                      <a href="#" className={cx('btn','btn-default','btn-flat')}>Profile</a>
                    </div>
                    <div className={cx('pull-right')}>
                      <a href="#" className={cx('btn','btn-default','btn-flat')}>Sign out</a>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" data-toggle="control-sidebar"><i className={cx('fa','fa-gears')}></i></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
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
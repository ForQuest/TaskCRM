import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';
import { logOut } from 'actions/users';
import user2 from 'images/user2-160x160.jpg';
import classNames from 'classnames/bind';
import styles from 'css/bootstrap';
import { Navbar, Nav, Dropdown, MenuItem, Image, Row, Col, Button } from 'components/react-bootstrap';
import NavDropdown  from 'components/react-bootstrap/NavDropdown';

const cx = classNames.bind(styles);

const Navigation = ({ user, logOut }) => {
    return (
      <header className={cx('main-header')}>

        <a href="index2.html" className={cx('logo')}>
          <span className={cx('logo-mini')}><b>A</b>LT</span>
          <span className={cx('logo-lg')}><b>Task</b>CRM</span>
        </a>
        <nav className={cx('navbar','navbar-static-top')} role="navigation">
          <a href="#" className={cx('sidebar-toggle')} data-toggle="offcanvas" role="button">
            <span className={cx('sr-only')}>Toggle navigation</span>
          </a>
          <div className={cx('navbar-custom-menu')}>
            <Nav className={cx('navbar-nav')}>
              <Dropdown id="messages-menu" componentClass="li" className={cx('messages-menu')}>
                <Dropdown.Toggle componentClass="a" useAnchor noCaret>
                  <i className={cx('fa','fa-envelope-o')}></i>
                  <span className={cx('label','label-success')}>4</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <MenuItem header>You have 4 messages</MenuItem>
                  <MenuItem content>
                    <ul className={cx('menu')}>
                      <li>
                        <a href="#">
                          <div className={cx('pull-left')}>
                            <Image src={user2} circle alt="User Image"/>
                          </div>
                          <h4>
                            Support Team
                            <small><i className={cx('fa','fa-clock-o')}></i> 5 mins</small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                    </ul>
                  </MenuItem>
                  <MenuItem className={cx('footer')}>See All Messages</MenuItem>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown id="notifications-menu" componentClass="li" className={cx('notifications-menu')}>
                <Dropdown.Toggle componentClass="a" useAnchor noCaret>
                  <i className={cx('fa','fa-bell-o')}></i>
                  <span className={cx('label','label-warning')}>10</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <MenuItem header>You have 10 notifications</MenuItem>
                  <MenuItem content>
                    <ul className={cx('menu')}>
                      <li>
                        <a href="#">
                          <i className={cx('fa','fa-users','text-aqua')}></i> 5 new members joined today
                        </a>
                      </li>
                    </ul>
                  </MenuItem>
                  <MenuItem className={cx('footer')}>View all</MenuItem>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown id="tasks-menu" componentClass="li" className={cx('tasks-menu')}>
                <Dropdown.Toggle componentClass="a" useAnchor noCaret>
                  <i className={cx('fa','fa-flag-o')}></i>
                  <span className={cx('label','label-danger')}>9</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <MenuItem header>You have 9 tasks</MenuItem>
                  <MenuItem content>
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
                  </MenuItem>
                  <MenuItem className={cx('footer')}>View all tasks</MenuItem>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown id="user-menu" componentClass="li" className={cx('user','user-menu')}>
                <Dropdown.Toggle componentClass="a" useAnchor noCaret>
                  <Image src={user2} className={cx('user-image')} alt="User Image"/>
                  <span className={cx('hidden-xs')}>Василий Пупкин</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <MenuItem content className={cx('user-header')}>
                    <Image src={user2} circle alt="User Image"/>

                    <p>
                      Василий Пупкин
                      <small>Администратор</small>
                    </p>
                  </MenuItem>
                  <MenuItem content className={cx('user-body')}>
                    <Row>
                      <Col xs={4} className={cx('text-center')}>
                        <a href="#">Тест</a>
                      </Col>
                      <Col xs={4} className={cx('text-center')}>
                        <a href="#">Тест</a>
                      </Col>
                      <Col xs={4} className={cx('text-center')}>
                        <a href="#">Тест</a>
                      </Col>
                    </Row>
                  </MenuItem>
                  <MenuItem content className={cx('user-footer')}>
                    <div className={cx('pull-left')}>
                      <Button className={cx('btn-flat')}>Профиль</Button>
                    </div>
                    <div className={cx('pull-right')}>
                      <Button className={cx('btn-flat')}>Выйти</Button>
                    </div>
                  </MenuItem>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
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
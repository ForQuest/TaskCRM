import React from 'react';
import classNames from 'classnames/bind';
import bootstrap from 'css/bootstrap';
import Button from 'components/reactstrap/Button';
import Container from 'components/reactstrap/Container'
import Input from 'components/reactstrap/Input';
import Row from 'components/reactstrap/Row';
import Col from 'components/reactstrap/Col';
import Table from 'components/reactstrap/Table';
import Card from 'components/reactstrap/Card';
import CardImg from 'components/reactstrap/CardImg';
import CardText from 'components/reactstrap/CardText';
import CardBlock from 'components/reactstrap/CardBlock';
import CardTitle from 'components/reactstrap/CardTitle';
import CardSubtitle from 'components/reactstrap/CardSubtitle';
import DropdownToggle from 'components/reactstrap/DropdownToggle';
import DropdownMenu from 'components/reactstrap/DropdownMenu';
import DropdownItem from 'components/reactstrap/DropdownItem';
import Dropdown from 'components/reactstrap/Dropdown';


const cx = classNames.bind(bootstrap);



/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const About = () => {
  return (
    <div className={cx('about')}>
      <h1 className={cx('header')}>About Ninja Ocean</h1>
      <Container>
        <Row>
          <Col md="4">
             <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Илья</td>
                  <td>Синицын</td>
                  <td>@lier</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Михаил</td>
                  <td>Чепкасов</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Юран</td>
                  <td>Ломанов</td>
                  <td>@younggod</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md="3">
            <Card>
              <CardImg top width="100%" src="http://www.successmoves.co.uk/wp-content/uploads/2012/07/50708_1280x720-318x180.jpg" alt="Card image cap" />
              <CardBlock>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                <Button>Button</Button>
              </CardBlock>
            </Card>
          </Col>
          <Col md="4">
                <Dropdown>
                  <DropdownToggle caret>
                    Dropdown
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
          </Col>
          <Col md="1"></Col>
        </Row>
      </Container>
      <div className={cx('description')}>
        <p>Imagine an ocean of ninjas. Now think of it as a metaphor.<br />
          Seriously, we love good tech. React, redux, scala, Haskell, machine learning, you name it!
        </p>
      </div>
      <div className={cx('contribute')}>
        <p>Want to contribute? Help us out!
          If you think the code on &nbsp;
          <a target='_blank' href='https://github.com/choonkending/react-webpack-node'>this repo</a>
        &nbsp;could be improved, please create an issue&nbsp;
          <a target='_blank' href='https://github.com/choonkending/react-webpack-node/issues'>here</a>!
        </p>
      </div>
    </div>
  );
}

export default About;

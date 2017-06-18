import React from 'react';
import classNames from 'classnames/bind';
import bootstrap from 'css/bootstrap';

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
      <div className={cx('container')}>
        <div className={cx('row')}>
          <div className={cx('col-md-4')}>col</div>
          <div className={cx('col-md-4')}>col</div>
          <div className={cx('col-md-4')}>col</div>
        </div>
      </div>
      <button className={cx(['btn', 'btn-primary'])}>Test</button>
      <div className={cx('description')}>
        <p>Imagine an ocean of ninjas. Now think of it as a metaphor.<br />
          Seriously, we love good tech. React, redux, scala, Haskell, machine learning, you name it!
        </p>
      </div>
      <div className={cx('contribute')}>
        <p>Want to contribute? Help us out!
          If you think the code on &nbsp;
          <a target="_blank" href="https://github.com/choonkending/react-webpack-node">this repo</a>
        &nbsp;could be improved, please create an issue&nbsp;
          <a target="_blank" href="https://github.com/choonkending/react-webpack-node/issues">here</a>!
        </p>
      </div>
    </div>
  );
};

export default About;

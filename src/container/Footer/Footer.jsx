import React, { Fragment, useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../Wrapper';
import { client } from '../../client';
import './footer.scss';

const Footer = () => {
  return (
    <Fragment>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:basofiibnur@gmail.com">
            contact@basofiibnu.me
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+6285156795355">+6285156795355</a>
        </div>
      </div>
    </Fragment>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);

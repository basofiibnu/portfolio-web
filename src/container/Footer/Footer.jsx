import React, { Fragment, useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../Wrapper';
import { client } from '../../client';
import './footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { value, name } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <Fragment>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a
            href="mailto:basofiibnur@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            basofiibnur@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a
            href="wa.me/6285156795355"
            target="_blank"
            rel="noreferrer"
          >
            +6285156795355
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              value={name}
              onChange={handleChangeInput}
              name="name"
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your Email"
              value={email}
              onChange={handleChangeInput}
              name="email"
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button
            type="button"
            className="p-text"
            onClick={handleSubmit}
          >
            {loading ? 'Sending' : 'Send Message'}
          </button>
        </div>
      ) : (
        <div>
          <h3>Thank you for getting in touch</h3>
        </div>
      )}
    </Fragment>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__light',
);

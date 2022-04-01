import React from 'react';

import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/basofi-ibnur-rohman-707417b1/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/id.kyo/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
      {/* <div>
        <a
          href="https://www.facebook.com/ID.PsychoBoy"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
      </div> */}
    </div>
  );
};

export default SocialMedia;

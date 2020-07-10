import React from 'react';
import '../assets/scss/Social.scss';

import { socialNames } from '../data/social';

const Social = () => (
  <ul className="social">
    {
      socialNames.map(({ name, url, icon }) => (
        <li key={name}>
          <a href={url} className={`icon icon-${icon}`} target="_blank" title={`Got to ${name}`} rel="noopener noreferrer">
            <span className="icon__name">{ name }</span>
          </a>
        </li>
      ))
    }
  </ul>
);

export default Social;

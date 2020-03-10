import React from 'react';
import image from '../utils/not-found.jpg';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <Link to="/">
      <img src={image} alt="not-found" />
    </Link>
  );
};

import React from 'react';
import image from '../utils/not-found.jpg';
import { Link } from 'react-router-dom';
import Container from '../containers/Container';

export default () => {
  return (
    <Container>
      <Link to="/">
        <img src={image} alt="not-found" />
      </Link>
    </Container>
  );
};

import React from 'react';
import Header from './Header';

export default ({ children, getCurrent }) => (
  <div className="container">
    <Header getCurrent={getCurrent} />
    <hr />
    {children}
  </div>
);

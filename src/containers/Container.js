import React from 'react';
import Header from './Header';
import Sidebar from '../components/Sidebar';

export default ({ title, children, subtitle }) => (
  <div className="layout">
    <div className="container">
      <Header title={title} subtitle={subtitle} />
      {/* <hr /> */}
      {children}
    </div>
    <Sidebar />
  </div>
);

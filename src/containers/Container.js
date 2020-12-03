import React, { useState } from 'react';
import Header from './Header';
import Sidebar from '../components/Sidebar';

export default ({ title, children, subtitle }) => {
  const [mobieMode, setMoveiMode] = useState(false);

  return (
    <div className="layout">
      <div className="container">
        <Header title={title} subtitle={subtitle} changeModeMobile={() => setMoveiMode(!mobieMode)} />
        {children}
      </div>
      <Sidebar mobieMode={mobieMode} />
    </div>
  );
};

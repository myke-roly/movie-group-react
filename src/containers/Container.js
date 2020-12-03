import React, { useState } from 'react';
import Header from './Header';
import Sidebar from '../components/Sidebar';
import Title from 'components/Title';

export default ({ title, children, subtitle }) => {
  const [mobieMode, setMoveiMode] = useState(false);

  return (
    <div className="layout">
      <div className="container">
        <Header changeModeMobile={() => setMoveiMode(!mobieMode)} />
        <Title title={title} subtitle={subtitle} />
        {children}
      </div>
      <Sidebar mobieMode={mobieMode} />
    </div>
  );
};

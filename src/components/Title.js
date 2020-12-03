import React from 'react';

const Title = ({ title, subtitle }) => {
  return (
    <div className="title">
      <h3>{title}</h3>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
};

export default Title;

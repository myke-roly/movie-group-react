import React from 'react';

const Title = ({title, subtitle}) => {
  return (
  <div className="title">
    {subtitle ? <h2>{subtitle}</h2> : null}
    <h1>{title}</h1>
  </div>
  )
}

export default Title;
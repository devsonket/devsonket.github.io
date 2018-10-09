import React from 'react';

export default({id, title, style = {}}) => (
  <div key={id} className="card c-card" style={style}>
    <a href="/">
      <h4>{title}</h4>
    </a>
  </div>
)

import React from 'react';

export default({id, title, description = null, style = {}}) => (
  <div key={id} className="card c-card" style={style}>
    <a href="/">
      <h4>{title}</h4>
      <p>{description && description}</p>
    </a>
  </div>
)

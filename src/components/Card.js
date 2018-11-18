import React from 'react';
import { Link } from 'react-router-dom';

export default({id, title, style = {}}) => (
  <div key={id} className="card c-card" style={style}>
    <Link to={`/${id}`}>
      <h4>{title}</h4>
    </Link>
  </div>
)

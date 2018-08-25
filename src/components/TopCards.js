import React from 'react';

import colors from '../utils/colors';

export default({tops}) => (
  <div className="top">
    {tops && tops.map(({id, title, description}) => (
      <div key={id} className="card c-card" style={{backgroundColor: colors[Math.floor((Math.random()*(colors.length)))]}}>
        <a href="/">
          <h4>{title}</h4>
          <p>{description}</p>
        </a>
      </div>
    ))}
  </div>
)

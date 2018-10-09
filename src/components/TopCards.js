import React from 'react';
import Card from './Card';

import colors from '../utils/colors';

export default({tops}) => (
  <div className="top">
    {tops && tops.map(({id, title, description}) => (
      <Card id={id} key={id} title={title} description={description} style={{backgroundColor: colors[Math.floor((Math.random()*(colors.length)))]}} />
    ))}
  </div>
)

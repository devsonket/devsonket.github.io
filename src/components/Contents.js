import React from 'react';
import Container from './Container';
import Card from './Card';

import organizedData from '../utils/organizedData';

export default ({data}) => (
  <Container>
    <section className="contents">
      <h2>সবগুলো</h2>
      {data ? Object.keys(organizedData(data)).map((char, index) => (
        <React.Fragment>
          <h3 keys={index}>{char}</h3>
          {organizedData(data)[char].map(({id, title}) => (
            <Card keys={id} title={title} />
          ))}
        </React.Fragment>
      )) : 'Loading'}
    </section>
  </Container>
)

import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Container from './Container';
import HeaderHome from './HeaderHome';
import TopCards from './TopCards';
import Contents from './Contents';
import Content from './Content';

export default ({searchAItem, searchResult, tops, data}) => {
  return (
    <React.Fragment>
      <HeaderHome searchAItem={searchAItem} />
      <Container>
        <TopCards tops={searchResult ? searchResult : tops} />
      </Container>
      <Contents data={data} />
    </React.Fragment>
  )
}

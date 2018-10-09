import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Container from './Container';
import HeaderContent from './HeaderContent';
import TopCards from './TopCards';
import Contents from './Contents';

class Content extends Component {
  state = {
    data: ''
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getData(id);
  }

  getData = async(id) => {
    const { data } = await axios('https://raw.githubusercontent.com/devsonket/devsonket.github.io/master/data/react.json');
    this.setState({data});
  }

  render() {
    const { data } = this.state;

    if(!data) {
      return 'Loading';
    }

    return (
      <React.Fragment>
        <HeaderContent />
        
      </React.Fragment>
    )
  }
}

export default Content;

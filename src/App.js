import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Container from './components/Container';
import HeaderHome from './components/HeaderHome';
import TopCards from './components/TopCards';
import Contents from './components/Contents';

class App extends Component {
  state = {
    tops: '',
    data: ''
  }

  async getData() {
    const {data} = await axios('https://raw.githubusercontent.com/devsonket/devsonket.github.io/master/data/index.json');
    this.setState({data})
  }

  async topData() {
    const {data: tops} = await axios('https://raw.githubusercontent.com/devsonket/devsonket.github.io/master/data/top.json');
    this.setState({tops})
  }

  componentDidMount() {
    this.getData();
    this.topData();
  }

  searchAItem = (term) => {
    let tops = this.state.tops;
    tops = tops && tops.filter(top => top.title.toLowerCase().includes(term.toLowerCase()));
    this.setState({tops});
  }

  render() {
    const { searchAItem } = this;
    const { tops, data } = this.state;

    return (
      <div className="App">
        <HeaderHome searchAItem={searchAItem} />
        <Container>
          <TopCards tops={tops} />
        </Container>
        <Contents data={data} />
      </div>
    );
  }
}

export default App;

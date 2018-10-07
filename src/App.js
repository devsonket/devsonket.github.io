import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import topdatas from './utils/topdatas';
import data from './utils/data';

import HeaderHome from './components/HeaderHome';
import TopCards from './components/TopCards';

class App extends Component {
  state = {
    tops: '',
    data: ''
  }

  async getData() {
    axios('https://raw.githubusercontent.com/devsonket/devsonket.github.io/master/data/index.js')
  }

  componentDidMount() {
    const data
  }

  searchAItem = (term) => {
    let tops = topdatas;
    tops = !tops ? tops : tops.filter(top => top.title.toLowerCase().includes(term.toLowerCase()));
    this.setState({tops});
  }

  render() {
    const { searchAItem } = this;
    const { tops } = this.state;

    return (
      <div className="App">
        <HeaderHome searchAItem={searchAItem} />
        <TopCards tops={tops} />
        <section className="contents">
          poda
        </section>
      </div>
    );
  }
}

export default App;

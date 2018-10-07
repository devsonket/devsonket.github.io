import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import HeaderHome from './components/HeaderHome';
import TopCards from './components/TopCards';

class App extends Component {
  state = {
    tops: '',
    data: ''
  }

  async getData() {
    const {data} = await axios('https://raw.githubusercontent.com/devsonket/devsonket.github.io/master/data/index.json');
    this.setState({data}, () => {
      console.log(this.state.data);
    })
  }

  async topData() {
    const {data: tops} = await axios('https://raw.githubusercontent.com/devsonket/devsonket.github.io/master/data/index.json');
    this.setState({tops})
  }

  componentDidMount() {
    this.getData();
    this.topData();
  }

  searchAItem = (term) => {
    let tops = this.state.tops;
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

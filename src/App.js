import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Content from './components/Content';

class App extends Component {
  state = {
    tops: '',
    data: '',
    searchResult: '',
    singleData: ''
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
    const data = this.state.data;
    let searchResult = data && data.filter(oneData => oneData.title.toLowerCase().includes(term.toLowerCase()));
    searchResult = term ? searchResult : '';
    this.setState({searchResult});
  }

  render() {
    const { searchAItem } = this;
    const { tops, searchResult, data } = this.state;

    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={props => (
            <Home searchAItem={searchAItem} tops={tops} searchResult={searchResult} data={data} />
          )}/>
          <Route exact path="/:id" render={props => (
            <Content {...props} data={data} />
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

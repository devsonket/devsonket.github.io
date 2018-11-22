import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

import './App.css';
import ReactGA from 'react-ga';

import Home from './components/Home';
import Content from './components/Content';
import AppContainer from './components/AppContainer';

class App extends Component {
  state = {
    tops: '',
    data: '',
    searchResult: '',
    loading: true
  }

  componentWillMount() {
    ReactGA.initialize('UA-129387050-1');
    ReactGA.pageview(window.location.href);
  }

  getData() {
    const data = axios('https://raw.githubusercontent.com/devsonket/devsonket.github.io/master/data/index.json');
    return data;
  }

  topData() {
    const tops = axios('https://raw.githubusercontent.com/devsonket/devsonket.github.io/master/data/top.json');
    return tops;
  }

  async getAllData() {
    const data = this.getData();
    const tops = this.topData();
    const getAllData = await Promise.all([data, tops]);
    this.setState({data: getAllData[0].data, tops: getAllData[1].data, loading: false});
  }

  componentDidMount() {
    this.getAllData();
  }

  searchAItem = (term) => {
    const charCode = term.charCodeAt();
    const data = this.state.data;
    let searchResult;
    if(charCode <= 128 && !Number.isNaN(charCode)) {
      searchResult = data && data.filter(oneData => oneData.title_en.toLowerCase().includes(term.trim().toLowerCase()));
    } else {
      searchResult = data && data.filter(oneData => oneData.title.toLowerCase().includes(term.trim().toLowerCase()));
    }
    searchResult = term ? searchResult : '';
    this.setState({searchResult});
  }

  render() {
    const { searchAItem } = this;
    const { tops, searchResult, data, loading } = this.state;

    if(loading) {
      return <div className="loader">
        <BeatLoader color={'#333'} />
      </div>;
    }

    return (
      <BrowserRouter>
        <AppContainer>
          <Route exact path="/" render={props => (
            <Home searchAItem={searchAItem} tops={tops} searchResult={searchResult} data={data} />
          )}/>
          <Route exact path="/:id" render={props => (
            <Content {...props} data={data} />
          )}/>
        </AppContainer>
      </BrowserRouter>
    );
  }
}

export default App;

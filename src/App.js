import { Loader } from "./components/Loader";
import React, { Component } from "react";
import axios from "axios";
import ReactGA from "react-ga";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import Content from "./components/Content";
import AppContainer from "./components/AppContainer";

class App extends Component {
  state = {
    tops: "",
    data: "",
    searchResult: "",
    loading: true
  };

  constructor(props) {
    super(props);

    ReactGA.initialize("UA-129387050-1", { testMode: props.isTestMode });
    (process.env.NODE_ENV && (process.env.NODE_ENV !== 'development' && navigator.userAgent !== 'ReactSnap')) && ReactGA.pageview(window.location.href);
  }

  getData() {
    const data = axios(
      "https://raw.githubusercontent.com/devsonket/devsonket.github.io/develop/data/index.json"
    );
    return data;
  }

  topData() {
    const tops = axios(
      "https://raw.githubusercontent.com/devsonket/devsonket.github.io/develop/data/top.json"
    );
    return tops;
  }

  async getAllData() {
    const data = this.getData();
    const tops = this.topData();
    const getAllData = await Promise.all([data, tops]);
    this.setState({
      data: getAllData[0].data,
      tops: getAllData[1].data,
      loading: false
    });
  }

  componentDidMount() {
    this.getAllData();
  }

  searchAItem = term => {
    const charCode = term.charCodeAt();
    const data = this.state.data;
    let searchResult;
    if (charCode <= 128 && !Number.isNaN(charCode)) {
      searchResult =
        data &&
        data.filter(oneData =>
          oneData.title_en.toLowerCase().includes(term.trim().toLowerCase())
        );
    } else {
      searchResult =
        data &&
        data.filter(oneData =>
          oneData.title.toLowerCase().includes(term.trim().toLowerCase())
        );
    }
    searchResult = term ? searchResult : "";
    this.setState({ searchResult });
  };

  render() {
    const { searchAItem } = this;
    const { tops, searchResult, data, loading } = this.state;

    if (loading) {
      return <Loader />;
    }

    return (
      <BrowserRouter>
        <AppContainer>
          <Route
            exact
            path="/"
            render={props => (
              <Home
                searchAItem={searchAItem}
                tops={tops}
                searchResult={searchResult}
                data={data}
              />
            )}
          />
          <Route
            exact
            path="/:id"
            render={props => <Content {...props} data={data} />}
          />
        </AppContainer>
      </BrowserRouter>
    );
  }
}

export default App;

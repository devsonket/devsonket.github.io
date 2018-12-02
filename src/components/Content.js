import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import styled from "@emotion/styled";

import Container from "./Container";
import HeaderContent from "./HeaderContent";
import Page404 from "./404";
import Footer from "./Footer";
import { Loader } from "./Loader";

import contributorMap from "../utils/contributorMap";
import { SingleItem } from "./SingleContent";

const SingleContent = styled.div`
  display: flex;
  flex-flow: row wrap;

  & > div {
    margin: 15px;
    flex: 1 1 calc(50% - 30px);

    @media print {
      margin: 0 50px;
    }

    @media only screen and (max-width: 668px) {
      flex-basis: calc(100% - 20px);
      margin: 0 10px;
      margin-bottom: 15px;
    }

    @media print {
      flex-basis: 100%;
    }
  }
`;

class Content extends Component {
  state = {
    data: "",
    contributor: "",
    redirect: false
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getData(id);
  }

  setTitle = () => {
    const {
      data: { title }
    } = this.state;
    document.title = `${title} - ডেভেলপার চিটশীট`;
  };

  getData = async id => {
    if (!localStorage.getItem("devCon")) {
      localStorage.setItem("devCon", "{}");
    }
    try {
      const { data } = await axios(
        `https://raw.githubusercontent.com/devsonket/devsonket.github.io/develop/data/${id}.json`
      );
      let contributor;
      try {
        const getLocalContributor = JSON.parse(localStorage.getItem("devCon"));
        const getCurrentId = getLocalContributor[id];
        const getCurrentTime = Date.now();
        let compareTime = 1000 * 60 * 60;
        if (getCurrentId && getCurrentId[1] + compareTime >= getCurrentTime) {
          contributor = getCurrentId[0];
        } else {
          contributor = await axios(
            `https://api.github.com/repos/devsonket/devsonket.github.io/commits?path=data/${id}.json`
          );
          contributor = contributorMap(contributor.data);
          let dataForLocalStorage = [contributor, Date.now()];
          getLocalContributor[id] = dataForLocalStorage;
          localStorage.setItem("devCon", JSON.stringify(getLocalContributor));
        }
      } catch (e) {
        contributor = null;
      }
      this.setState({ data, contributor });
      this.setTitle();
    } catch (e) {
      this.setState({ redirect: true });
    }
  };

  render() {
    const { data, contributor, redirect } = this.state;
    const {
      match: { url }
    } = this.props;

    if (redirect && url !== "/404") {
      return <Redirect push to="/404" />;
    }

    if (url === "/404") {
      return <Page404 />;
    }

    if (!data) {
      return <Loader />;
    }

    return (
      <React.Fragment>
        <HeaderContent
          title={data.title}
          description={data.description}
          contributor={contributor}
        />
        <Container>
          <SingleContent>
            {data.contents.map((mapContent, index) => (
              <SingleItem key={index} {...mapContent} />
            ))}
          </SingleContent>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Content;

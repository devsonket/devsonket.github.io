import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import styled from "@emotion/styled";

import Container from "./Container";
import HeaderContent from "./HeaderContent";
import Page404 from "./404";
import Footer from "./Footer";
import { Loader } from "./Loader";

import { SingleItem } from "./SingleContent";

const SingleContent = styled.div`
  display: flex;
  flex-flow: row wrap;

  & > div {
    margin: 15px;
    flex: 1 1 calc(50% - 30px);

    @media print {
      margin: 15px 50px;
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
    try {
      const { data } = await axios(
        `https://raw.githubusercontent.com/devsonket/devsonket.github.io/develop/data/${id}.json`
      );
      this.setState({ data });
      this.setTitle();
    } catch (e) {
      this.setState({ redirect: true });
    }
  };

  render() {
    const { data, redirect } = this.state;
    const {
      match: { url }
    } = this.props;
    const id = this.props.match.params.id;

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
          id={id}
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

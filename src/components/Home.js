import React from "react";
import Container from "./Container";
// import HeaderHome from "./HeaderHome";
import TopCards from "./TopCards";
import Contents from "./Contents";
import Footer from "./Footer";
import MastHead from "./mastHead";
import Navbar from "./NavBar";

export default ({ searchAItem, searchResult, tops, data }) => {
  return (
    <React.Fragment>
      {/* <HeaderHome searchAItem={searchAItem} /> */}
      <Navbar />
      <MastHead />
      <Container>
        <TopCards tops={searchResult ? searchResult : tops} />
      </Container>
      <Contents data={data} />
      <Footer />
    </React.Fragment>
  );
};

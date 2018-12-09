import React, { PureComponent } from "react";
import styled from "@emotion/styled";
import { Route } from "react-router-dom";
import "../../utils/closest";

import "./navbar.css";
import { BrandLogo } from "../BrandLogo";
import { Button } from "../Button";
import { intiateAnimation } from "./utility";
import { SearchBar } from "../SearchBar";

const NavbarEl = styled.nav`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  height: 60px;
  z-index: 999;
  width: 100%;
  top: 0;
  will-change: transform;
  position: absolute;

  ${props =>
    props.changeNav &&
    `
      transition: transform 0.2s cubic-bezier(0, 0.94, 1, 0.99);
      transform: ${props.show ? `translateY(0)` : `translateY(-100%)`};
      position: fixed;
      box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.15);
      background: rgba(255, 255, 255, 0.97);
    `}

  @media (max-width: 459px) {
    padding: 0px 10px;
  }

  @media print {
    box-shadow: none;
    justify-content: center;
    align-items: center;
  }

  ul li {
    display: inline-block;
  }

  li.btn-add {
    float: right;

    @media only screen and (max-width: 460px) {
      display: none;
    }
  }

  .btn-add a {
    background-color: #4caf50;
    color: #fff;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 4px;
  }
`;

class Navbar extends PureComponent {
  closeSearchBar = e => {
    if (!e.target.closest(".js-search-bar")) {
      this.setState({ searchBarHide: true });
      this.stopListening();
    }
  };

  stopListening = () =>
    document.removeEventListener("click", this.closeSearchBar, false);

  openSearch = () => {
    document.addEventListener("click", this.closeSearchBar, false);
    this.setState({ searchBarHide: false });
    this.searchBar.focus();
  };

  state = {
    show: false,
    changeNav: false,
    searchBarHide: true
  };

  render() {
    const { changeNav, show, searchBarHide } = this.state;

    return (
      <React.Fragment>
        <SearchBar
          ref={e => (this.searchBar = e)}
          className="js-search-bar"
          hide={searchBarHide}
          onChange={e => this.props.searchAItem(e.target.value)}
          placeholder="কিসের উপর চিটশিট চাচ্ছেন?"
        />

        <NavbarEl className="js-main-navbar" changeNav={changeNav} show={show}>
          <BrandLogo />
          <div className="main-navbar__buttons">
            <Route
              exact
              path="/"
              render={() => (
                <Button onClick={this.openSearch} style={{ marginRight: 10 }}>
                  সার্চ
                </Button>
              )}
            />
            <Button href="https://github.com/devsonket/devsonket.github.io/issues/new?title=%E0%A6%95%E0%A6%BF%E0%A6%B8%E0%A7%87%E0%A6%B0%20%E0%A6%9A%E0%A6%BF%E0%A6%9F%E0%A6%B6%E0%A7%80%E0%A6%9F%20%E0%A6%9A%E0%A6%BE%E0%A6%A8?&body=%E0%A6%95%E0%A6%BF%20%E0%A6%95%E0%A6%BF%20%E0%A6%9A%E0%A6%BE%E0%A6%A8%20%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A4%20%E0%A6%B2%E0%A6%BF%E0%A6%96%E0%A7%81%E0%A6%A8&labels=%E0%A6%A8%E0%A6%A4%E0%A7%81%E0%A6%A8%20%E0%A6%86%E0%A6%B0%E0%A7%87%E0%A6%95%E0%A6%9F%E0%A6%BE">
              + নতুন আরেকটা
            </Button>
          </div>
        </NavbarEl>
      </React.Fragment>
    );
  }

  componentDidMount() {
    const nav = document.querySelector(".js-main-navbar");
    intiateAnimation.call(this, nav);
  }

  componentWillUnmount() {
    this.stopListening();
  }
}

export default Navbar;

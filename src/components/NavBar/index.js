import React, { PureComponent } from "react";
import styled from "@emotion/styled";
import "./navbar.css";

import { BrandLogo } from "../BrandLogo";
import { Button } from "../Button";

const Navbar = styled.nav`
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

export default class extends PureComponent {
  intiateAnimation = () => {
    let lastScrollTop = 0,
      latestKnownScrollTop = 0,
      ticking = false;

    const update = () => {
      // reset the tick
      ticking = false;

      let currScrollTop = latestKnownScrollTop;
      let isScrollingDown = currScrollTop > lastScrollTop;
      let isHeaderVisible = currScrollTop < 58;

      if (isScrollingDown && !isHeaderVisible) {
        this.setState({ show: false }, () => (lastScrollTop = currScrollTop));
      } else if (!isScrollingDown || !currScrollTop) {
        this.setState({ show: true }, () => (lastScrollTop = currScrollTop));
      }

      if (currScrollTop > 60) {
        // `is-hidden`  styles are in app.css
        this.nav.classList.add("is-hidden");
        setTimeout(() => this.setState({ changeNav: true }), 0);
      } else if (!currScrollTop) {
        this.setState({ changeNav: false });
      }
    };

    const onScroll = () => {
      latestKnownScrollTop = window.scrollY;
      requestTick();
    };

    function requestTick() {
      if (!ticking) {
        window.requestAnimationFrame(update);
      }
      ticking = true;
    }

    window.addEventListener("scroll", onScroll);
  };

  componentDidMount() {
    this.nav = document.querySelector(".js-main-navbar");
    this.intiateAnimation();
  }

  state = {
    show: false,
    changeNav: false
  };

  render() {
    const { changeNav, show } = this.state;
    return (
      <Navbar className="js-main-navbar" changeNav={changeNav} show={show}>
        <BrandLogo />
        <Button href="https://github.com/devsonket/devsonket.github.io/issues/new?title=%E0%A6%95%E0%A6%BF%E0%A6%B8%E0%A7%87%E0%A6%B0%20%E0%A6%9A%E0%A6%BF%E0%A6%9F%E0%A6%B6%E0%A7%80%E0%A6%9F%20%E0%A6%9A%E0%A6%BE%E0%A6%A8?&body=%E0%A6%95%E0%A6%BF%20%E0%A6%95%E0%A6%BF%20%E0%A6%9A%E0%A6%BE%E0%A6%A8%20%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A4%20%E0%A6%B2%E0%A6%BF%E0%A6%96%E0%A7%81%E0%A6%A8&labels=%E0%A6%A8%E0%A6%A4%E0%A7%81%E0%A6%A8%20%E0%A6%86%E0%A6%B0%E0%A7%87%E0%A6%95%E0%A6%9F%E0%A6%BE">
          + নতুন আরেকটা
        </Button>
      </Navbar>
    );
  }
}

import React, { PureComponent } from "react";
import styled from "@emotion/styled";

import { BrandLogo } from "./BrandLogo";

const Navbar = styled.nav`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  background: rgba(255, 255, 255, 0.94);
  height: 60px;
  position: fixed;
  z-index: 999;
  width: 100%;
  border-bottom: 1px solid gainsboro;
  top: 0;
  z-index: 999;
  transition: .2s all cubic-bezier(0, 0.94, 1, 0.99);
  transform: ${props => (props.show ? `translateY(0)` : `translateY(-100%)`)};

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

const NewButton = styled.a`
  text-decoration: none;
  display: inline-block;
  padding: 8px 18px;
  border-radius: 4px;
  font-weight: 600;
  line-height: 1;
  transition: 0.2s all ease;

  background: #02b3e4;
  box-shadow: 8px 10px 20px 0 rgba(46, 61, 73, 0.15);
  color: white;
  text-shadow: 0 1px 3px #86888e;

  @media print {
    display: none;
  }

  &:hover {
    box-shadow: 2px 4px 8px 0 rgba(46, 61, 73, 0.2);
    background-color: #02b7e9;
  }
`;

export default class extends PureComponent {
  intiateAnimation = () => {
    let latestKnownScrollY = 0,
      lastScrollY,
      ticking = false;

    window.addEventListener("scroll", () => {
      latestKnownScrollY = window.scrollY;
      requestTick();
    });

    const update = () => {
      ticking = false;

      let currentScrollY = latestKnownScrollY - 5;

      if (
        currentScrollY > lastScrollY &&
        currentScrollY > 100 &&
        currentScrollY - lastScrollY > 10
      ) {
        this.setState({ show: false });
      } else if (currentScrollY < lastScrollY) {
        this.setState({ show: true });
      }

      lastScrollY = currentScrollY;
    };

    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(update);
      }
      ticking = true;
    }
  };

  componentDidMount() {
    this.intiateAnimation();
  }

  state = {
    show: true
  };

  render() {
    return (
      <Navbar show={this.state.show}>
        <BrandLogo />
        <NewButton href="https://github.com/devsonket/devsonket.github.io/issues/new?title=%E0%A6%95%E0%A6%BF%E0%A6%B8%E0%A7%87%E0%A6%B0%20%E0%A6%9A%E0%A6%BF%E0%A6%9F%E0%A6%B6%E0%A7%80%E0%A6%9F%20%E0%A6%9A%E0%A6%BE%E0%A6%A8?&body=%E0%A6%95%E0%A6%BF%20%E0%A6%95%E0%A6%BF%20%E0%A6%9A%E0%A6%BE%E0%A6%A8%20%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A4%20%E0%A6%B2%E0%A6%BF%E0%A6%96%E0%A7%81%E0%A6%A8&labels=%E0%A6%A8%E0%A6%A4%E0%A7%81%E0%A6%A8%20%E0%A6%86%E0%A6%B0%E0%A7%87%E0%A6%95%E0%A6%9F%E0%A6%BE">
          + নতুন আরেকটা
        </NewButton>
      </Navbar>
    );
  }
}

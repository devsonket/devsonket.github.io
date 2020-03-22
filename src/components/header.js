import React from "react"
import styled from "@emotion/styled"
import { FiPlus, FiStar } from "react-icons/fi"

import { Logo } from "./common"

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  li {
    margin-left: 15px;
    font-weight: bolder;
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: var(--accentdark);
      svg {
        margin-right: 5px;
      }
    }
  }
`

// import NavBar from "./navbar"

// const HeaderArea = styled.header`
//   background-color: #fff;
//   .contributor {
//     list-style: none;
//     margin-bottom: 15px;
//   }
//   .contributor p {
//     margin-bottom: 10px;
//     font-weight: 900;
//   }
//   .contributor li {
//     display: inline-block;
//     position: relative;
//     margin: 0 5px;
//   }
//   .contributor-profile span {
//     position: absolute;
//     bottom: 5px;
//     right: -2px;
//     font-weight: bold;
//     background-color: #4caf50;
//     color: #fff;
//     font-size: 11px;
//     width: 15px;
//     height: 15px;
//     line-height: 15px;
//     border-radius: 40px;
//   }
//   .contributor-profile img {
//     width: 40px;
//     border-radius: 40px;
//     border: 3px solid #ffc107;
//   }
// `

// const HeaderEl = styled.div`
//   width: 940px;
//   margin: 80px auto 0 auto;
//   @media only screen and (max-width: 940px) {
//     width: 100%;
//   }
// `

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0;
`

const Header = ({ children, colorpref, islightcolor }) => (
  <HeaderContainer>
    <div>
      <Logo colorpref={colorpref} islightcolor={islightcolor} />
    </div>
    <MenuList>
      <li>
        <a href="#">
          <FiPlus /> কন্ট্রিবিউট করুন
        </a>
      </li>
      <li>
        <a href="#">
          <FiStar /> স্টার দিন
        </a>
      </li>
    </MenuList>
  </HeaderContainer>
)

export default Header

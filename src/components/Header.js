import React from "react"
import styled from "@emotion/styled"
import { FiPlus, FiEdit, FiStar } from "react-icons/fi"

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
      color: ${props =>
        props.islightcolor === "true"
          ? "var(--accentlight)"
          : "var(--accentdark)"};
      svg {
        margin-right: 5px;
      }
      @media (max-width: 480px) {
        span {
          display: none;
        }
      }
    }
  }
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0;
`

const Header = ({ children, colorpref, filename, islightcolor }) => (
  <HeaderContainer>
    <div>
      <Logo colorpref={colorpref} islightcolor={islightcolor} />
    </div>
    <MenuList islightcolor={islightcolor}>
      <li>
        {filename ? (
          <a
            target="__blank"
            rel="noopener noreferrer"
            href={`https://github.com/devsonket/devsonket.github.io/blob/develop/data/${filename}.json`}
          >
            <FiEdit /> <span>এডিট করুন</span>
          </a>
        ) : (
          <a
            target="__blank"
            rel="noopener noreferrer"
            href="https://github.com/devsonket/devsonket.github.io#%E0%A6%95%E0%A6%BF%E0%A6%AD%E0%A6%BE%E0%A6%AC%E0%A7%87-%E0%A6%95%E0%A6%A8%E0%A7%8D%E0%A6%9F%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%AC%E0%A6%BF%E0%A6%89%E0%A6%9F-%E0%A6%95%E0%A6%B0%E0%A6%AC%E0%A7%87%E0%A6%A8"
          >
            <FiPlus /> <span>কন্ট্রিবিউট করুন</span>
          </a>
        )}
      </li>
      <li>
        <a
          target="__blank"
          rel="noopener noreferrer"
          href="https://github.com/devsonket/devsonket.github.io"
        >
          <FiStar /> <span>স্টার দিন</span>
        </a>
      </li>
    </MenuList>
  </HeaderContainer>
)

export default Header

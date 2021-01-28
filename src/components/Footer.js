import React from "react"
import styled from "@emotion/styled"

import { Container, Curve, Section } from "./common"

const FooterContainer = styled.footer`
  background: var(--accentlight);
  text-align: center;
  @media print {
    visibility: hidden;
  }
`

const FooterArea = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  text-align: left;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
  > div {
    flex: 1;
    @media (max-width: 480px) {
      flex: 1 1 100%;
      margin: 0;
      margin-bottom: 15px;
      text-align: center;
      ul {
        list-style: none;
        margin-left: 0 !important;
      }
    }
    margin: 0 15px;
    :nth-of-type(2n + 2) {
      @media (max-width: 991px) {
        margin-left: 0;
      }
    }
    :first-of-type {
      margin-left: 0;
      @media (max-width: 991px) {
        flex: 1 1 100%;
        margin-bottom: 15px;
      }
    }
    :last-of-type {
      margin-right: 0;
    }
    ul {
      margin-left: 20px;
      li {
        a {
          position: relative;
          color: #fff;
          text-decoration: none;
          :after {
            position: absolute;
            content: "";
            width: 100%;
            height: 2px;
            bottom: 3px;
            left: 0;
            background: #fff;
          }
        }
      }
    }
  }
`

const Footer = () => (
  <FooterContainer>
    <Curve color="var(--accentdark)">
      <Container>
        <Section>
          <FooterArea>
            <div>
              <h3>ডেভসংকেত সম্পর্কে</h3>
              <p>
                ডেভসংকেত এর লক্ষ্য হচ্ছে বাংলাতে একটা বড় চিটশিটের ভান্ডার গড়ে
                তোলা। এটা সম্পূর্ণ স্বাধীন এবং ওপেন সোর্স গিটহাব অর্গানাইজেশন।
              </p>
            </div>
            <div>
              <h3>কমিউনিটি</h3>
              <ul>
                <li>
                  <a
                    target="__blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/devsonket"
                  >
                    ফেইসবুক পেইজ
                  </a>
                </li>
                <li>
                  <a
                    target="__blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/groups/devsonket"
                  >
                    ফেইসবুক গ্রুপ
                  </a>
                </li>
                <li>
                  <a
                    target="__blank"
                    rel="noopener noreferrer"
                    href="https://github.com/devsonket/devsonket.github.io"
                  >
                    গিটহাব প্রোজেক্ট
                  </a>
                </li>
                <li>
                  <a
                    target="__blank"
                    rel="noopener noreferrer"
                    href="https://github.com/devsonket/devsonket.github.io/issues"
                  >
                    গিটহাব ইস্যু
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3>গুরুত্বপূর্ণ লিঙ্ক</h3>
              <ul>
                <li>
                  <a
                    target="__blank"
                    rel="noopener noreferrer"
                    href="https://medium.com/%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%8B%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE%E0%A6%BF%E0%A6%82-%E0%A6%AA%E0%A6%BE%E0%A6%A4%E0%A6%BE"
                  >
                    প্রোগ্রামিং পাতা
                  </a>
                </li>
                <li>
                  <a
                    target="__blank"
                    rel="noopener noreferrer"
                    href="https://github.com/me-shaon/bangla-programming-resources"
                  >
                    বাংলায় প্রোগ্রামিং রিসোর্স
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3>স্পন্সর</h3>
              <ul>
                <li>
                  ডোমেইন -{" "}
                  <a
                    target="__blank"
                    rel="noopener noreferrer"
                    href="https://github.com/NaSabbir"
                  >
                    Nazir Ahmed Sabbir
                  </a>
                </li>
                <li>
                  টি-শার্টঃ{" "}
                  <a
                    target="__blank"
                    rel="noopener noreferrer"
                    href="https://blace.com.bd"
                  >
                    Blace
                  </a>
                </li>
              </ul>
            </div>
          </FooterArea>
        </Section>
      </Container>
    </Curve>
  </FooterContainer>
)

export default Footer

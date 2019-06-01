import React from "react";
import styled from "@emotion/styled";

const ContainerStyle = styled.section`
  max-width: 940px;
  margin: 0 auto;
  padding: 50px 0;
  @media only screen and (max-width: 940px) {
    width: 100%;
  }
  @media only screen and (max-width: 460px) {
    padding: 25px 0;
  }
`;

export const Container = ({ children }) => (
  <ContainerStyle>
    {children}
  </ContainerStyle>
)

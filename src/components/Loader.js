import React from "react";
import styled from "@emotion/styled";
import { BeatLoader } from "react-spinners";

const LoaderEl = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;

  & > div {
    display: block;
    width: 100%;
    text-align: center;
  }
`;

export function Loader() {
  return (
    <LoaderEl>
      <BeatLoader color="#333" />
    </LoaderEl>
  );
}

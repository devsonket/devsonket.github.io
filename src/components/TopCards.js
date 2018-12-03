import React from "react";
import Card from "./Card";
import styled from "@emotion/styled";

import colors from "../utils/colors";

const Top = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > div {
    flex-grow: 1;
    border-radius: 3px;
    box-shadow: 0 1px 1px rgba(102, 119, 136, 0.55);
    overflow: hidden;
    text-shadow: 0 1px 1px rgba(51, 68, 85, 0.5);
  }
`;

export default ({ tops }) => (
  <Top className="top">
    {tops &&
      tops.map(({ id, title, description }) => (
        <Card
          id={id}
          key={id}
          title={title}
          description={description}
          style={{
            backgroundColor: colors[Math.floor(Math.random() * colors.length)]
          }}
        />
      ))}
  </Top>
);

import React from "react";
import Container from "./Container";
import Card from "./Card";
import { BeatLoader } from "react-spinners";
import styled from "@emotion/styled";

import organizedData from "../utils/organizedData";

const Contents = styled.div`
  h2 {
    text-align: center;
    font-size: 22px;
    color: rgba(0, 0, 0, 0.5);
  }

  .content h3 {
    font-size: 18px;
    padding-left: 15px;
    margin-bottom: 15px;
    color: rgba(0, 0, 0, 0.5);
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }

  .items > div {
    width: calc(33.3333% - 20px);
  }
`;

export default ({ data }) => (
  <Container>
    <Contents className="mt-0">
      <h2>সবগুলো</h2>
      {data ? (
        Object.keys(organizedData(data)).map((char, index) => (
          <React.Fragment key={index}>
            <div className="content">
              <h3>{char}</h3>
              <div className="items">
                {organizedData(data)[char].map(({ id, title }) => (
                  <Card contentCard key={id} id={id} title={title} />
                ))}
              </div>
            </div>
          </React.Fragment>
        ))
      ) : (
        <BeatLoader color={"#eee"} />
      )}
    </Contents>
  </Container>
);

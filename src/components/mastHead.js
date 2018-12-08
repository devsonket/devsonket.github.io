import React from "react";
import styled from "@emotion/styled";

const MastHead = styled.div`
  width: 100%;
  height: 55vh;
  background: linear-gradient( to right, transparent, rgba(240, 240, 240, 0.97) 47%),
    url("${require("../img/creation-man-board.svg")}");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5px;
  border-bottom: 1px solid rgb(226, 226, 226);

  @media only screen and (max-width: 580px) {
    background: rgba(240, 240, 240, 0.97);
  }

  .masthead-content {
    position: absolute;
    right: 0;
    max-width: 404px;
    top: 25vh;
    padding: 10px;

    @media only screen and (max-width: 580px) {
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 20vh;
      text-align: center;
    }

    @media only screen and (min-width: 900px) {
      right: 10vw;
    }

    &__title {
      font-size: 50px;
      font-weight: 300;
      text-shadow: 0 2px 1px rgba(51, 68, 85, 0.5);
      line-height: 1.8;

      @media only screen and (max-width: 580px) {
        line-height: 1.2;
      }
    }

    &__description {
      line-height: 1.8;
      text-shadow: 0 2px 1px rgba(51, 68, 85, 0.25);

      @media only screen and (max-width: 580px) {
        margin-top: 20px;
      }
    }

    & > div,
    h1,
    p,
    img {
      padding: 0;
      margin: 0;
      line-height: normal;
    }
  }
`;

export default () => {
  return (
    <MastHead>
      <div className="masthead-content">
        <h1 className="masthead-content__title">ডেভেলপার চিটশিট</h1>
        <p className="masthead-content__description">
          বাংলা চিটশিটের ভান্ডার। নিজের মাতৃভাষায় চিটশিটের ভান্ডার সমৃদ্ধ করতে
          আপনিও যোগ দিন
        </p>
      </div>
    </MastHead>
  );
};

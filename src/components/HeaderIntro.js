import styled from "@emotion/styled";

export const HeaderIntro = styled.div`
  padding: 0 50px;
  text-align: center;
  padding-bottom: 100px;

  @media only screen and (max-width: 460px) {
    padding: 0 15px;
    padding-bottom: 15px;
  }

  @media print {
    padding-bottom: 0px;
  }

  input {
    width: 100%;
    border: none;
    padding: 15px;
    border-radius: 4px;
    box-shadow: 0 6px 8px rgba(102, 119, 136, 0.03),
      0 1px 2px rgba(102, 119, 136, 0.3);
    transition: 0.2s all ease;
  }

  input:focus {
    outline: none;
    box-shadow: 0 0 0 4px #d6dcdb;
  }

  p {
    margin-top: 0px;
    color: #485663;
    font-size: 15px;
  }
`;

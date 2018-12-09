import styled from "@emotion/styled";

export const Button = styled.a`
  text-decoration: none;
  display: inline-block;
  padding: 8px 7px;
  border-radius: 4px;
  font-weight: 600;
  line-height: 1;
  transition: 0.2s all ease;
  cursor: pointer;
  border-bottom: 2px solid lightblue;

  color: #2f2b2b;
  text-shadow: 0 1px 1px #86888e;

  @media print {
    display: none;
  }

  &:hover {
    color: white;
    box-shadow: 0px 1px 3px 0 rgba(46, 61, 73, 0.2);
    background-color: ${props =>
      props.background ? props.background : "#02b7e9"};
  }
`;

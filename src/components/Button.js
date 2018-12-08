import styled from "@emotion/styled";

export const Button = styled.a`
  text-decoration: none;
  display: inline-block;
  padding: 8px 18px;
  border-radius: 4px;
  font-weight: 600;
  line-height: 1;
  transition: 0.2s all ease;

  background: ${props => (props.background ? props.background : "#02b3e4")};
  box-shadow: 2px 4px 8px 0 rgba(46, 61, 73, 0.2);
  color: white;
  text-shadow: 0 1px 3px #86888e;

  @media print {
    display: none;
  }

  &:hover {
    box-shadow: 0px 1px 3px 0 rgba(46, 61, 73, 0.2);
    background-color: ${props =>
      props.background ? props.background : "#02b7e9"};
  }
`;

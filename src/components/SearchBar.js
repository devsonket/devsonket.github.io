import styled from "@emotion/styled";

export const SearchBar = styled.input`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9999;
  width: 100%;
  border: none;
  padding: 20px 6%;
  box-shadow: 0 8px 38px rgba(102, 119, 136, 0.12);
  transition: 0.2s all ease;
  will-change: transform;


  transform: ${({ hide }) => (hide ? `translateY(-130%)` : `translateY(0)`)};

  &:focus {
    outline: none;
  }
`;

import styled from "styled-components";

export const Link = styled.button`
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.white};
  font-variant: small-caps;
  font-family: ${({ theme }) => theme.fontSecundary};
  font-size: 1.2rem;
  margin-left: 20px;

  :hover {
    color: ${({ theme }) => theme.colors.principal};
    cursor: pointer;
  }

  @media screen and (max-width: 900px) {
    margin-left: 0;
    padding: 3px 15px 3px 15px;
    margin-top: 20px;
    color: black;
    z-index: 1;
  }
`;

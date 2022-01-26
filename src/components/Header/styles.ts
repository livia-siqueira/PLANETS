import styled from "styled-components";

export const Container = styled.header`
  height: 5rem;
  width: 100%;
  background-color: transparent;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1100px) {
    height: 10rem;
  }
  @media screen and (max-width: 900px) {
    height: 5rem;
  }
`;

export const Content = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
    gap: 30px;
  }

  @media screen and (max-width: 900px) {
    flex-direction: row;
    justify-content: space-between;

  }

 
`;

export const Menu = styled.div` 
  display: none;

  @media screen and (max-width: 900px) {
    display: flex;
  }
`

export const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.white};
  font-variant: small-caps;
  font-family: "Antonio", sans-serif;
  font-weight: 200;
`;

export const Nav = styled.nav`
  @media screen and (max-width: 900px) {
    display: none;
  }
`;


export const ButtonMenu = styled.button`
  background-color: transparent;
  border: none;

`

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50px;
  right: 30px;
  background-color: white;
`
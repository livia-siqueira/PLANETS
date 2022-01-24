import styled from "styled-components";

export const Container = styled.header`
  height: 5rem;
  width: 100%;
  background-color: transparent;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({theme}) => theme.colors.white};
  font-variant: small-caps;
  font-family: 'Antonio', sans-serif;
  font-weight: 200;
`;

export const Nav = styled.nav`
  
`;

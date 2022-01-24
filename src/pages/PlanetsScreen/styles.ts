import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
`;

export const Content = styled.section`
  max-width: 90%;
  min-height: 40vh;
  margin: 3rem auto;
  display: flex;
  flex-direction: row;
`;

export const ContainerImage = styled.div`
  width: 60%;
  text-align: center;
`;

export const Image = styled.img``;

export const Description = styled.aside`
  width: 30%;
`;

export const TitleDescription = styled.p`
  color: white;
  margin: 1rem 0 2rem 0;
  text-align: left;
  font-family: "Spartan", sans-serif;
`;

export const Details = styled.footer`
  width: 100%;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h1`
  color: white;
  font-variant: small-caps;
  font-family: "Antonio", sans-serif;
  font-size: 5rem;
`;

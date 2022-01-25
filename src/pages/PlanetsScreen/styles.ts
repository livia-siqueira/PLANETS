import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
`;

export const Content = styled.section`
  max-width: 90%;
  min-height: 40vh;
  margin: 3rem auto;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1100px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
`;

export const ContainerImage = styled.div`
  width: 60%;
  text-align: center;
`;

export const Image = styled.img``;

export const Description = styled.aside`
  width: 30%;

  @media screen and (max-width: 1100px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
  }

`;

export const Text = styled.p`
  margin-top: 20px;
`

export const TitleDescription = styled.div`
  color: white;
  margin: 1rem 0 2rem 0;
  text-align: left;
  font-family: "Spartan", sans-serif;
  @media screen and (max-width: 1100px) {
      width: 50%;
  }
`;

export const Details = styled.footer`
  width: 100%;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1100px) {
      width: 40%;
  }
`;

export const Name = styled.h1`
  color: white;
  font-variant: small-caps;
  font-family: "Antonio", sans-serif;
  font-size: 5rem;
`;

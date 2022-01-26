import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  @media screen and (max-width: 1110px) {
    width: 90%;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

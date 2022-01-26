import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  border: 1px solid white;
  padding: 10px 20px 20px 10px;
  width: 20rem;
  height: 20%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: flex-start;

  & + & {
    margin-left: 1rem;
  }
  @media screen and (max-width: 900px) {
      width: 80%;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      & + & {
        margin: 0;
        margin-top: 20px;
        
    }

  }


 
`;

export const Title = styled.h4`
  font-family: "Spartan", sans-serif;
  font-variant: small-caps;
  font-size: 1rem;
  color: gray;
`;

export const Information = styled.span`
  font-size: 2rem;
  font-family: "Antonio", sans-serif;
  color: ${({ theme }) => theme.colors.white};
`;

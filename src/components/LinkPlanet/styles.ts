import styled from "styled-components";


export const Link = styled.button`
    background-color: transparent;
    border: 0;
    color: ${({theme}) => theme.colors.white};
    font-variant: small-caps;
    font-family: ${({theme}) => theme.fontSecundary};
    font-size: 1.2rem;
    margin-left: 20px;

    :hover{
        color: ${({theme}) => theme.colors.principal};
        cursor: pointer;
    }

`
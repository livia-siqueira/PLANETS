import styled from 'styled-components'


export const Container = styled.button`
    width: 100%;
    border: 0;
    color: ${({theme}) => theme.colors.white};
    background-color: #6f2ed6;
    font-family: 'Antonio', sans-serif;
    height: 3rem;
    text-align: left;
    padding: 0.8rem 0 0.8rem 0.5rem;
    outline: 0;
    & +&{ 
        margin-top: 1rem;
    }

`
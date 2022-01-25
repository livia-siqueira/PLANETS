import styled from 'styled-components'


interface Props {
    isActive: boolean;
}

export const Container = styled.button<Props>`
    width: 100%;
    border: 0;
    color: ${({theme}) => theme.colors.white};
    background-color: ${({isActive}) => isActive ? '#6f2ed6' : 'transparent'};
    border: 1px solid;
    border-color: ${({isActive}) => isActive ? 'transparent' : 'white'};
    font-family: 'Antonio', sans-serif;
    height: 3rem;
    text-align: left;
    padding: 0.8rem 0 0.8rem 0.5rem;
    outline: 0;
    & +&{ 
        margin-top: 1rem;
    }

`
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: ${({theme}) => theme.colors.background} url('images/background-stars.svg') no-repeat;
    font-family: ${({theme}) => theme.fontSecundary};
}

#root{
    @media(max-width: 1080px){
        font-size: 90%;
    }
    @media(max-width: 700px){
        font-size: 80%;
    }
    @media(max-width: 400px){
        font-size: 50%;
    }
}


button {
    cursor: pointer;
}




`;

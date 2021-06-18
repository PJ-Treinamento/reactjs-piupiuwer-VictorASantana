import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
    font-size: 60%;
    --color-background: #161A1D;
    --color-background-light: #535461;
    --color-primary-lighter: #9871F5;
    --color-primary-light: #916BEA;
    --color-primary: #8257E5;
    --color-primary-dark: #774DD6;
    --color-primary-darker: #6842C2;
    --color-secundary: #04D361;
    --color-secundary-dark: #04BF58;
    --color-title-in-primary: #FFFFFF;
    --color-text-in-primary: #D4C2FF;
    --color-text-title: #32264D;
    --color-text-complement: #9C98A6;
    --color-text-base: #6A6180;
    --color-line-in-white: #E6E6F0;
    --color-input-background: #F8F8FC;
    --color-button-text: #FFFFFF;
    --color-box-base: #FFFFFF;
    --color-box-footer: #FAFAFC;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

body{
    background: #161A1D;
    color: #333;
    -webkit-font-smoothing: antialiased;
}

#feedBody{
    width: 100vw;
    height: 100vh;
    margin-bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
}
`;
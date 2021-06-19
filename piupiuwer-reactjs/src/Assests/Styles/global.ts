import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
    font-size: 60%;
    --color-background: #161A1D;
    --color-background-light: #535461;
    --color-primary: #E5383B;
    --color-text-base: #FFF;
    --color-line-in-white: #E6E6F0;
    --color-input-background: #293241;
    --color-button-text: #FFFFFF;
    --color-box-base: #3D5A80;
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
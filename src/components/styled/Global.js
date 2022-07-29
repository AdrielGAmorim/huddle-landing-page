import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.body};
        color: hsl(192, 100%, 9%);
        font-family: 'Poppins', sans-serif;
        font-size: 1.15rem;
        margin: 0;
    }

    p {
        opacity: .6;
        line-height: 1.5;
    }

    img {
        max-width: 100%;
    }
`
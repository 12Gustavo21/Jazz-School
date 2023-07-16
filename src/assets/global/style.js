import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
        cursor: none;
    }

    *::selection {
        background: #ED4D1B;
        color: #FFF;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background: linear-gradient(90deg, #FFE7D1 0%, #FFF2E5 100%);
        overflow-x: hidden;
    }
    
    *::-webkit-scrollbar {
        background: linear-gradient(90deg, #FFE7D1 0%, #FFF2E5 100%);
        width: 0.3rem;
    }

    *::-webkit-scrollbar-thumb {
        background: #ED4D1B;
    }
`;
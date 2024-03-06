import styled, { createGlobalStyle } from 'styled-components';
 
const pageContainerRadius = "60px";

const GlobalStyle = createGlobalStyle`
    :root{
        font-size: 16px;
    }
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        min-height: 100vh;
        line-height: 1.5;
    }
    button{
        outline: none;
        border: none;
    }
`;

const PageContainer = styled.section`
    grid-column-start: 2;
    grid-column-end: 8;
    background-color: red;
    border-top-left-radius: ${pageContainerRadius};
    border-bottom-left-radius: ${pageContainerRadius};
`;
 
export {
    GlobalStyle,
    PageContainer
};
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  } 

  :root {
    --black: #000;

    --max-width: 1080px;
  }

  html {
    scroll-behavior: smooth;
    font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;
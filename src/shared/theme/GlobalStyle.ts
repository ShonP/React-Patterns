import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    display: flex;
    height: 100%;
    width: 100%;
  }
  body {
    background-color: ${({ theme }) => theme.application.background};
    color: ${({ theme }) => theme.application.textColor};
    display: flex;
    flex: 1;
    margin: 0;
  }
  #root {
    display: flex;
    flex: 1;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default GlobalStyles;

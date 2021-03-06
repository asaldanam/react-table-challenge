import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    padding: 16px;
    margin: 16px 0 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    background: ${({ theme }) => theme.colors.greyLight};
    color: ${({ theme }) => theme.colors.greyDarker};
  }

  input {
    width: 100%;
    border: none;
    height: 100%;
    padding: 0;
    outline: none;
    background: ${({ theme }) => theme.colors.greyLight};
    color: ${({ theme }) => theme.colors.greyDarker};
  }

  button {
    appearance: none;
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
  }

  #root {
    font-size: 14px;
  }
`;

export default GlobalStyles;

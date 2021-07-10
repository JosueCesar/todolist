import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    border: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    background-color: #24252a;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
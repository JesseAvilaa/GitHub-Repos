import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  ::selection {
    background: #ffa366;
    color: #fff;
  }

  body {
    background: #ffa366;
    background: #ffa366;
    -webkit-font-smoothing: antialised !important;
    margin: 0 20px;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

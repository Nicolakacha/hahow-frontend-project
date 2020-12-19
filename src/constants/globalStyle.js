import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: white;
    letter-spacing: 1px;
  }

  h1, h2, h3 {
    color: white;
    font-weight: 400;
  }

  li {
    list-style-type: none;
  }
  
  a {
    text-decoration: none;
    display: flex;
  
    &:hover {
      text-decoration: none;
    }
  }
  
  a:hover {
    cursor: pointer;
  }

  button {
    border: none;
    background-color: #fff;
    cursor: pointer;
  }

  button:hover, button:focus {
    outline: none;
  }

  body {
    font:  14px 'Anton', sans-serif;
  }
`;
export default GlobalStyle;
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  h1,li{
    color: #323131;
  }

  h2,h3{
    color: #4B4A4A;
  }
p{
  color:#2B2B2B;
}
  ul, li, h1, h2, h3, p, button {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  a:link, a:visited, a:active {
    text-decoration:none;
    color: none;
}
  button: {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    overscroll-behavior: none;
  }

.app{

}
`;

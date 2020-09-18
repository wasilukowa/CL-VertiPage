import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;
      font-size: 10px;
      padding: 0;
      margin: 0;
    }
    *, *:before, *:after {
      box-sizing: inherit;
      margin: 0;
      padding: 0;
    }
    body {
      font-size: 1.5rem;
      font-family: 'Open Sans Regular', sans-serif;
      background-color: ${props => props.theme.lightGrey};
      color: ${props => props.theme.black}
    }
`;

export default GlobalStyle;
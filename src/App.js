import React from 'react';
import './App.css';
import Header from "./components/Header";

import GlobalFonts from "./fonts/fonts";

// const GlobalStyle = createGlobalStyle`
//     @font-face{
//       font-family: 'oleo_script';
//       font-style: regular;
//       font-weight: 700;
//       src: url('/static/oleo-script-v9-latin-regular.woff2') format('woff2');
//     }

//     @font-face {
//       font-family: 'radnika_next';
//       src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
//       font-weight: normal;
//       font-style: normal;
//     }

//     body {
//       background-color: #ffffff;
//     }
// `;


function App() {
  return (
    <>
      <GlobalFonts />
      <Header />
    </>
  );
}

export default App;

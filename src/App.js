import React from 'react';
import './App.css';
import {createGlobalStyle} from "styled-components";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
    @font-face{
      font-family: 'Oleo Script';
      font-style: normal;
      font-weight: 700;
      src: url('../raxkHieDvtMOe0iICsUccCDmnlrR0TukKQ.woff2') format('woff2');
      }
    // body {
    //   background-color: black;
    //   }
`;


function App() {
    return (
        <>
            <GlobalStyle/>
            <Header/>
        </>
    );
}

export default App;

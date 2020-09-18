import React from 'react';
import './App.css';
import Header from "./components/Header";

import { ThemeProvider } from "styled-components";
import GlobalFonts from "./fonts/fonts";
import GlobalStyle from "./styles/GlobalStyles"

const theme = {
  black: "#444",
  grey: "#696969",
  lightGrey: "#E6E6E6",
  pink: "#FF4486",
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalFonts />
      <Header />
    </ThemeProvider>
  );
}

export default App;

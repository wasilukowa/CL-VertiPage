import React from 'react';
import styled from 'styled-components';

import Header from "./components/Header";
import MainContentContainer from "./components/MainContentContainer"

import { ThemeProvider } from "styled-components";
import GlobalFonts from "./fonts/fonts";
import GlobalStyle from "./styles/GlobalStyles"

import theme from "./styles/theme";
import { BrowserRouter as Router } from 'react-router-dom';

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 10px;

  @media (min-width: 730px){
    padding: 50px;
  }
`;


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalFonts />

      <Wrapper>
        <Router>
          <Header />
          <MainContentContainer />
        </Router>
      </Wrapper>

    </ThemeProvider>
  );
}

export default App;

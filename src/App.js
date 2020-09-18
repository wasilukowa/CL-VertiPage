import React from 'react';
import styled from 'styled-components';

import Header from "./components/Header";

import { ThemeProvider } from "styled-components";
import GlobalFonts from "./fonts/fonts";
import GlobalStyle from "./styles/GlobalStyles"

import theme from "./styles/theme";

const Wrapper = styled.div`
  padding: 40px;
  
`;


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalFonts />
      <Wrapper>
        <Header />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

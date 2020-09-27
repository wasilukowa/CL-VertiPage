import React from 'react';

import Header from './components/Header';
import MainContentContainer from './components/MainContentContainer';
import Footer from './components/Footer';

import { ThemeProvider } from 'styled-components';
import GlobalFonts from './fonts/fonts';
import GlobalStyle from './styles/GlobalStyles';

import theme from './styles/theme';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalFonts />
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <MainContentContainer />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

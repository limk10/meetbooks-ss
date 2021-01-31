import React from "react";
import { Container } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { BrowserRouter } from "react-router-dom";

import Appbar from "~/components/Appbar";
import GlobalStyle from "~/assets/css/global";
import Routes from "~/routes";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3C8E65",
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Appbar />
        <Container style={{ paddingTop: 20 }} maxWidth="lg">
          <GlobalStyle />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

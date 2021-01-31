import React from "react";
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";

import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleRoute = (route, params) => {
    history.push(route);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Container style={{ paddingLeft: 0, paddingRight: 0 }} maxWidth="lg">
          <Toolbar>
            <Typography
              onClick={() => handleRoute("/")}
              className={classes.logo}
              variant="h6"
            >
              Meet Books
            </Typography>
            <div className={classes.divider}>
              <Typography
                onClick={() => handleRoute("/")}
                className={classes.menu}
                variant="h6"
              >
                Home
              </Typography>
              <Typography className={classes.dividerMenu} variant="h6">
                -
              </Typography>
              <Typography
                onClick={() => handleRoute("/books")}
                className={classes.menu}
                variant="h6"
              >
                Livros
              </Typography>
              <Typography className={classes.dividerMenu} variant="h6">
                -
              </Typography>
              <Typography
                onClick={() => handleRoute("/books/favorites")}
                className={classes.menu}
                variant="h6"
              >
                Meus Favoritos
              </Typography>
            </div>
            <div style={{ flexGrow: 1 }} />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;

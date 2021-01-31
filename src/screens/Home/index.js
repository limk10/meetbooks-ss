import React from "react";

import {
  Container,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";

import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={12} lg={6}>
            <Typography className={classes.resumeBox} variant="h6" gutterBottom>
              Um breve resumo do sistema
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              O projeto foi feito para buscar livros da API do Google e mostrar
              seus detalhes, foi usado a biblioteca <b>React ❤</b>, com as
              tecnologias, <b>ESLint</b> com padrão standart para organização do
              código, <b>Babel Root Import </b>
              para organização de importações, <b>Redux Thunk</b> para controle
              de estados, <b>Material UI</b> para Kit de UI, <b>Axios</b> para
              integração com o backend, implementado tratamento de erros no
              interceptor, <b>Moment</b> para tratamento de datas... entre
              outras tecnologias.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Tenha um bom uso :)
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Home;

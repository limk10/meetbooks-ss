import React from "react";

import { Grid, Card, CardContent, Typography } from "@material-ui/core";

import useStyles from "../styles";

import { formatDate } from '~/helpers/date'

const Characteristics = (params) => {
  const classes = useStyles()
  const { book } = params;

  return (
    <Grid data-testid="characteristicsBook" container>
      <Grid item xs={12}>
        <Card className={classes.marginTop}>
          <CardContent>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                Características
              </Typography>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <Typography
                  color="textSecondary"
                  variant="subtitle1"
                  gutterBottom
                >
                  Número de Páginas
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  color="textSecondary"
                  variant="subtitle1"
                  gutterBottom
                >
                  {book?.volumeInfo?.pageCount || "-"}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  color="textSecondary"
                  variant="subtitle1"
                  gutterBottom
                >
                  Ano
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  color="textSecondary"
                  variant="subtitle1"
                  gutterBottom
                >
                  {formatDate(book?.volumeInfo?.publishedDate ) || "-"}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  color="textSecondary"
                  variant="subtitle1"
                  gutterBottom
                >
                  Idioma
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  color="textSecondary"
                  variant="subtitle1"
                  gutterBottom
                >
                  {book?.volumeInfo?.language || "-"}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Characteristics;

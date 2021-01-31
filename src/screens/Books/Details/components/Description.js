import React from "react";

import { Grid, Card, CardContent, Typography } from "@material-ui/core";

import useStyles from "../styles";

const Description = (params) => {
  const classes = useStyles();
  const { book } = params;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Card className={classes.marginTop}>
          <CardContent>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                Descrição
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2"  color="textSecondary" gutterBottom>
                {book?.volumeInfo?.description}
              </Typography>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Description;

import React from "react";

import { Grid, Card, CardContent, Typography, Box } from "@material-ui/core";

import { formatBRLMoney } from "~/helpers/money";

import useStyles from "../styles";

const ImageDetails = (params) => {
  const classes = useStyles();
  const { book } = params;
  return (
    <Grid data-testid="imageDetailsBook" container>
      <Grid item xs={3}>
        <img
          className={classes.media}
          src={book?.volumeInfo?.imageLinks?.smallThumbnail}
        />
      </Grid>
      <Grid item xs={9}>
        <Card className={classes.marginLeft}>
          <CardContent>
            <Grid style={{ display: "flex" }} item xs={12}>
              <Typography variant="h5" gutterBottom>
                {book?.volumeInfo?.title}
              </Typography>
              <Typography
                style={{ flex: 1, textAlign: "right" }}
                color="textSecondary"
                variant="subtitle2"
                gutterBottom
              >
                ({book?.id})
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                Autor: {book?.volumeInfo?.authors?.map((item) => item)} |
                Editora: {book?.volumeInfo?.publisher}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" gutterBottom>
                {book?.volumeInfo?.categories?.length &&
                  book?.volumeInfo?.categories[0]?.replaceAll("/", "•")}
              </Typography>
            </Grid>
            {book?.saleInfo?.listPrice?.amount && (
              <Box mt={3}>
                <Grid item xs={12}>
                  <Typography variant="h4" gutterBottom>
                    {formatBRLMoney(book?.saleInfo?.listPrice?.amount)}
                  </Typography>
                </Grid>
              </Box>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ImageDetails;

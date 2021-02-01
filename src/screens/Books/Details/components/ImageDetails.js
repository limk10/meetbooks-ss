import React from "react";

import { Grid, Card, CardContent, Typography, Box, Button } from "@material-ui/core";

import { formatBRLMoney } from "~/helpers/money";

import useStyles from "../styles";

const ImageDetails = (params) => {
  const classes = useStyles();
  const { book } = params;

  const handleBuyBook = (link) => {
    window.open(
      link,
      '_blank' // <- This is what makes it open in a new window.
    );
  }

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
            <Box mt={3}>
              {book?.saleInfo?.listPrice?.amount && (
                <Grid item xs={12}>
                  <Typography color="textSecondary" variant="h5" gutterBottom>
                    <del>
                      {formatBRLMoney(book?.saleInfo?.listPrice?.amount)}
                    </del>
                  </Typography>
                </Grid>
              )}
              {book?.saleInfo?.retailPrice?.amount && (
                <Grid item xs={12}>
                  <Typography variant="h4" gutterBottom>
                    {formatBRLMoney(book?.saleInfo?.retailPrice?.amount)}
                  </Typography>
                </Grid>
              )}
            </Box>
            {book?.saleInfo?.buyLink && (
              <Box mt={3}>
                <Button
                  onClick={() => handleBuyBook(book?.saleInfo?.buyLink)}
                  variant="contained"
                  color="primary"
                >
                  Comprar
                </Button>
              </Box>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ImageDetails;

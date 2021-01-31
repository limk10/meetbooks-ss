import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  LinearProgress,
} from "@material-ui/core";

import useStyles from "./styles";

import api from "~/services/api";

import { formatBRLMoney } from "~/helpers/money";

import Description from "./components/Description";
import Characteristics from "./components/Characteristics";

const Details = ({ match }) => {
  const { id } = match.params;
  const classes = useStyles();
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      setLoading(true);
      const { data } = await api.get(`/${id}`);
      setBook({ ...data });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.root}>
      {loading && (
        <>
          <Typography
            className={classes.loadingText}
            variant="overline"
            display="block"
            gutterBottom
          >
            Carregando detalhes do livro, um momento...
          </Typography>
          <LinearProgress />
        </>
      )}
      {!loading && (
        <>
          <Grid container>
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
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      gutterBottom
                    >
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
          <Description book={book} />
          <Characteristics book={book} />
        </>
      )}
    </div>
  );
};

Details.propTypes = {
  match: PropTypes.any,
};

export default Details;

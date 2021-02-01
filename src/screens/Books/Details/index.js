import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Typography,
  LinearProgress,
} from "@material-ui/core";

import api from "~/services/api";

import useStyles from "./styles";
import ImageDetails from "./components/ImageDetails";
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
          <ImageDetails book={book} />
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

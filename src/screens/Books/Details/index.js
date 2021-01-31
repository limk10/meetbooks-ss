import React from "react";
import PropTypes from "prop-types";
import useStyles from "./styles";

const Details = ({ match }) => {
  const { id } = match.params;
  const classes = useStyles();

  return <h1>Detalhes do Livro</h1>;
};

Details.propTypes = {
  match: PropTypes.any,
};

export default Details;

import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  CircularProgress,
  FormControlLabel,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import actionsBooks from "~/actions/books";
import actionsLoading from "~/actions/loading";
import api from "~/services/api";

import useStyles from "./styles";

const FilterBook = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const isLoading = useSelector((state) => state.reducerLoading.handleLoading);

  const handleChange = (props, value) => {
    form[props] = value;
    setForm({ ...form });
    dispatch(actionsBooks.addFilter(form));
  };

  const handleSearch = async (e) => {
    try {
      e?.preventDefault();
      dispatch(actionsLoading.handleLoading(true));
      const { data } = await api.get(
        `?q=${form?.search}&startIndex=0&maxResults=10&key=${process.env.REACT_APP_API_KEY}`
      );

      const { items, totalItems } = data;

      dispatch(actionsBooks.addBooks({ items, totalItems }));
      dispatch(actionsBooks.addPage(1));
    } catch (error) {
    } finally {
      dispatch(actionsLoading.handleLoading(false));
    }
  };

  return (
    <div>
      <form autoComplete="off">
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Pesquise por nome, autor e editora"
          className={classes.TextField}
          onChange={(e) => handleChange("search", e?.target?.value)}
        />
        <div className={classes.wrapper}>
          <Button
            data-testid="searchButton"
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            disabled={isLoading}
            onClick={(e) => handleSearch(e)}
          >
            Pesquisar :)
          </Button>
          {isLoading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </div>
      </form>
    </div>
  );
};

export default FilterBook;

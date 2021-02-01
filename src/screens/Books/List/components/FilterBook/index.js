import React, { useState, useEffect } from "react";
import { TextField, Button, CircularProgress } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useDispatch, useSelector } from "react-redux";

import actionsBooks from "~/actions/books";
import actionsLoading from "~/actions/loading";
import api from "~/services/api";

import useStyles from "./styles";

const FilterBook = () => {
  let timeout = null;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [listBookInput, setListBookInput] = useState([]);
  const [loadingInput, setLoadingInput] = useState(false);

  const isLoading = useSelector((state) => state.reducerLoading.handleLoading);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleSearchInut();
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [form?.search]);

  const handleChange = (props, value) => {
    form[props] = value;
    setForm({ ...form });
    dispatch(actionsBooks.addFilter(form));
  };

  const handleSearchInut = async () => {
    if (!form?.search) return;
    try {
      setLoadingInput(true);
      const { data } = await api.get(
        `?q=${form?.search}&startIndex=0&maxResults=10&key=${process.env.REACT_APP_API_KEY}`
      );

      const { items } = data;
      setListBookInput(Object.keys(items).map((key) => items[key]?.volumeInfo));
    } catch (error) {
    } finally {
      setLoadingInput(false);
    }
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
        {/* <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Pesquise por nome, autor e editora"
          className={classes.TextField}
          onChange={(e) => handleChange("search", e?.target?.value)}
        /> */}
        <Autocomplete
          id="combo-box-demo"
          options={listBookInput}
          getOptionSelected={(options) => options?.title === form?.search}
          getOptionLabel={(options) => options?.title}
          loading={loadingInput}
          style={{ width: "100%" }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              className={classes.TextField}
              onChange={(e) => handleChange("search", e?.target?.value)}
              value={form?.search}
              placeholder="Pesquise por nome, autor e editora"
              InputProps={{
                ...params?.InputProps,
                endAdornment: (
                  <>
                    {loadingInput ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
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

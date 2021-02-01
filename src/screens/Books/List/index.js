import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  Button,
  Typography,
  Collapse,
  LinearProgress,
  Box,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

import FilterBook from "./components/FilterBook";
import useStyles from "./styles";

import CardBook from "~/components/CardBook";
import actionsBooks from "~/actions/books";
import actionsLoading from "~/actions/loading";
import api from "~/services/api";

const List = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [showFilter, setShowFilter] = useState(false);

  const booksList = useSelector((state) => state.reducerBooks.addBooks);
  const pageBookList = useSelector((state) => state.reducerBooks.addPage);
  const filterBookList = useSelector((state) => state.reducerBooks.addFilter);
  const isLoading = useSelector((state) => state.reducerLoading.handleLoading);

  const handleSearch = async (e, page) => {
    try {
      e?.preventDefault();
      dispatch(actionsLoading.handleLoading(true));
      const { data } = await api.get(
        `?q=${filterBookList?.search}&startIndex=${page}&maxResults=10&key=${process.env.REACT_APP_API_KEY}`
      );

      const { items, totalItems } = data;
      console.log(items);
      dispatch(actionsBooks.addBooks({ items, totalItems }));
      dispatch(actionsBooks.addPage(page));
    } catch (error) {
    } finally {
      dispatch(actionsLoading.handleLoading(false));
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
        <Button
          data-testid="filterButton"
          className={classes.btnFilter}
          fullWidth
          variant={showFilter ? "contained" : "outlined"}
          color="primary"
          onClick={() => setShowFilter(!showFilter)}
        >
          {showFilter ? "Esconder Filtro" : "Abrir Filtro"}
        </Button>
        <Collapse in={showFilter}>
          <FilterBook />
        </Collapse>
      </Grid>
      <Grid item xs={12} sm={8}>
        {!isLoading && !booksList?.items?.length && (
          <>
            <Typography
              className={classes.loadingText}
              variant="overline"
              display="block"
              gutterBottom
            >
              Clique em &quot;Abrir Filtro&quot;, digite o livro, autor ou
              editora que seja, em seguida clique em &quot;Pesquisar :)&quot;
            </Typography>
          </>
        )}
        {!isLoading && !!booksList?.length && (
          <Typography variant="overline" display="block" gutterBottom>
            {booksList?.items?.length} Livros Encontrados :)
          </Typography>
        )}
        {!isLoading && !!booksList?.items?.length && (
          <>
            <Grid id="list-container" container spacing={2}>
              {booksList?.items?.map((book, key) => (
                <Grid key={key} item xs={12} sm={6} md={4}>
                  <CardBook book={book} />
                </Grid>
              ))}
            </Grid>
            <Grid container>
              <Box mt={3}>
                <Pagination
                  color="primary"
                  onChange={(e, value) => handleSearch(e, value)}
                  page={pageBookList}
                  count={Math.trunc(booksList?.totalItems / 10)}
                  variant="outlined"
                />
              </Box>
            </Grid>
          </>
        )}

        {isLoading && (
          <>
            <Typography
              className={classes.loadingText}
              variant="overline"
              display="block"
              gutterBottom
            >
              Carregando o acervo de livro, um momento...
            </Typography>
            <LinearProgress />
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default List;

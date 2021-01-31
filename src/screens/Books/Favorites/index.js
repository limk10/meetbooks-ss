import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Typography, Container } from "@material-ui/core";

import useStyles from "./styles";

import CardBook from "~/components/CardBook";

import { getBooksLocalStorage } from "~/helpers/localStorage";

const List = () => {
  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const books = await getBooksLocalStorage();
    setBooksList([...books]);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        {!booksList?.length && (
          <Typography
            style={{ textAlign: "center" }}
            variant="overline"
            display="block"
            gutterBottom
          >
            Nenhum livro encontrado nos seus favoritos :(
          </Typography>
        )}
        {!!booksList?.length && (
          <>
            <Typography variant="overline" display="block" gutterBottom>
              {booksList?.length} Livros Encontrados :)
            </Typography>
            <Grid id="list-container" container spacing={2}>
              {booksList?.map((book, key) => (
                <Grid key={key} item xs={12} sm={4} md={3}>
                  <CardBook book={book} />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default List;

import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@material-ui/core";

import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

import useStyles from "./styles";

import {
  setBooksLocalStorage,
  getBooksLocalStorage,
} from "~/helpers/localStorage";

import { useHistory } from 'react-router-dom'

const CardBook = (params) => {
  const classes = useStyles();
  const history = useHistory();
  const [favorites, setFavorites] = useState([]);
  const [isFavorites, setIsFavorites] = useState(false);
  const { book } = params;
  const { volumeInfo } = book;

  useEffect(() => {
    isFavorite();
  }, []);

  const isFavorite = async () => {
    const _favorites = await getBooksLocalStorage();
    const _isFavorite = _favorites.map(({ id }) => id).includes(book?.id);
    setIsFavorites(_isFavorite);
  };

  const handleMyBooks = async () => {
    await setBooksLocalStorage(book);
    const _favorites = await getBooksLocalStorage();
    setFavorites(_favorites);
    const _isFavorite = _favorites.map(({ id }) => id).includes(book?.id);
    setIsFavorites(_isFavorite);
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          title={volumeInfo?.title}
          subheader={volumeInfo?.subtitle}
          titleTypographyProps={{ variant: "subtitle1" }}
          subheaderTypographyProps={{ variant: "caption" }}
        />
        <CardMedia
          alt="Contemplative Reptile"
          className={classes.media}
          image={volumeInfo?.imageLinks?.thumbnail}
          title="Paella dish"
          lazy="loading"
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="body2" color="textSecondary" component="p">
            {volumeInfo?.description
              ? `${volumeInfo?.description?.slice(0, 90)}...`
              : "Sem Descrição"}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions} disableSpacing>
          <div>
            <IconButton
              className={classes.iconButton}
              aria-label="add to favorites"
              onClick={() => handleMyBooks()}
            >
              {!isFavorites ? <FavoriteBorderOutlinedIcon /> : <FavoriteIcon />}
            </IconButton>
          </div>
          <div>
            <IconButton onClick={() => history.push(`/books/details/${book?.id}`)} className={classes.iconButton} aria-label="share">
              <VisibilityOutlinedIcon />
            </IconButton>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardBook;

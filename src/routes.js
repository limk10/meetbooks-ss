import React from "react";
import { Switch, Route } from "react-router-dom";

// Home
import Home from "~/screens/Home";
// Books
import ListBooks from "~/screens/Books/List";
import DetailBooks from "~/screens/Books/Details";
import FavoriteBooks from "~/screens/Books/Favorites";
// NotFound
import NotFound from "~/screens/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/books" component={ListBooks} />
      <Route exact path="/books/favorites" component={FavoriteBooks} />
      <Route exact path="/books/details/:id" component={DetailBooks} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;

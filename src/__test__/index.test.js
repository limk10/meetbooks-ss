import "@testing-library/jest-dom";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import store from "~/store";
import App from "~/App";

// test utils file
const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: BrowserRouter });
};

test("home page", async () => {
  const { getByText } = renderWithRouter(
    <Provider store={store()}>
      <App />
    </Provider>,
    { route: "/" }
  );

  expect(getByText(/Um breve resumo do sistema/i)).toBeInTheDocument();
});

test("list of books", async () => {
  const { getByText, getAllByTestId } = renderWithRouter(
    <Provider store={store()}>
      <App />
    </Provider>,
    { route: "/books" }
  );

  expect(
    getByText(/digite o livro, autor ou editora que seja/i)
  ).toBeInTheDocument();

  const btnFilter = await waitFor(() => getAllByTestId("filterButton"));
  expect(btnFilter[0]).toBeDefined();
  fireEvent.click(btnFilter[0]);

  const btnSearch = await waitFor(() => getAllByTestId("searchButton"));
  expect(btnSearch[0]).toBeDefined();
  fireEvent.click(btnSearch[0]);

  const btnFavorites = await waitFor(() => getAllByTestId("favoriteButton"));
  expect(btnFavorites[0]).toBeDefined();
  fireEvent.click(btnFavorites[0]);

  const cardBox = await waitFor(() => getAllByTestId("cardBox"));
  expect(cardBox).toBeDefined();
});

test("list of favorites books", async () => {
  const { getByTestId } = renderWithRouter(
    <Provider store={store()}>
      <App />
    </Provider>,
    { route: "/books/favorites" }
  );

  const cardBox = await waitFor(() => getByTestId("cardBox"));
  expect(cardBox).toBeDefined();
});

test("details of book", async () => {
  const { getByTestId } = renderWithRouter(
    <Provider store={store()}>
      <App />
    </Provider>,
    { route: "/books/details/:id" }
  );

  const imageDetailsBook = await waitFor(() => getByTestId("imageDetailsBook"));
  const descriptionBook = await waitFor(() => getByTestId("descriptionBook"));
  const characteristicsBook = await waitFor(() =>
    getByTestId("characteristicsBook")
  );

  expect(imageDetailsBook).toBeDefined();
  expect(descriptionBook).toBeDefined();
  expect(characteristicsBook).toBeDefined();
});

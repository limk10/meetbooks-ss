import { toastifyNotification } from "~/helpers/notifications";

const getBooksLocalStorage = () => {
  const stored = localStorage["my_books"] || [];

  if (stored.length) return JSON.parse(stored);
  else return stored;
};

const setBooksLocalStorage = async (book) => {
  if (!book) return;
  const { id, volumeInfo } = book;
  let stored = await getBooksLocalStorage();

  if (stored.map(({ id }) => id).includes(id)) {
    deleteBooksLocalStorage(book);
    return;
  }

  stored.push(book);

  localStorage["my_books"] = JSON.stringify(stored);

  toastifyNotification(
    "success",
    `Sucesso... O filme ${volumeInfo?.title} foi adicionado aos seus favoritos!`,
    "top-right",
    5000
  );
};

const deleteBooksLocalStorage = async (book) => {
  const { id: _id, volumeInfo } = book;
  let stored = await getBooksLocalStorage();
  stored = stored.filter(({ id }) => _id !== id);
  localStorage["my_books"] = JSON.stringify(stored);

  return toastifyNotification(
    "success",
    `Sucesso... O filme ${volumeInfo?.title} foi removido dos seus favoritos!`,
    "top-right",
    5000
  );
};

export { getBooksLocalStorage, setBooksLocalStorage, deleteBooksLocalStorage };

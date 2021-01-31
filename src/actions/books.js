import actionsTypes from "./actionsTypes";

export default {
  addBooks: (value) => {
    return {
      type: actionsTypes.ADD_BOOKS,
      payload: value,
    };
  },
  addFilter: (value) => {
    return {
      type: actionsTypes.ADD_FILTER,
      payload: value,
    };
  },
  addPage: (value) => {
    return {
      type: actionsTypes.ADD_PAGE,
      payload: value,
    };
  },
};

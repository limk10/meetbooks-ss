import actionsTypes from "~/actions/actionsTypes";

const INITIAL_STATE = {};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.ADD_BOOKS:
      return { ...state, addBooks: action?.payload };

    case actionsTypes.ADD_FILTER:
      return { ...state, addFilter: action?.payload };

    case actionsTypes.ADD_PAGE:
      return { ...state, addPage: action?.payload };

    default:
      return state;
  }
};

export default reducers;

import actionsTypes from "~/actions/actionsTypes";

const INITIAL_STATE = {};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.IS_LOADING:
      return { ...state, handleLoading: action?.payload };

    default:
      return state;
  }
};

export default reducers;

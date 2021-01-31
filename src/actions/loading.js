import actionsTypes from "./actionsTypes";

export default {
  handleLoading: (value) => {
    return {
      type: actionsTypes.IS_LOADING,
      payload: value,
    };
  },
};

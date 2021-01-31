import { combineReducers } from "redux";

import reducerBooks from "~/reducers/books";
import reducerLoading from "~/reducers/loading";

const reducers = combineReducers({
  reducerBooks,
  reducerLoading,
});

export default reducers;

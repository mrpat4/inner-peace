import { combineReducers } from "redux";
// import { reducer as theme } from "components/Header/redux/reducer";
import themeReducer from "components/Header/redux/themeSlice";

export default combineReducers({
  theme: themeReducer,
});

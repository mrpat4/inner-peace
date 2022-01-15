import { configureStore } from "@reduxjs/toolkit";
import createReducer from "./createReducer";
// import createSagaMiddleware from "redux-saga";
// import { routerMiddleware } from "connected-react-router";
// import { createBrowserHistory } from "history";
// import storage from "redux-persist/lib/storage";
// import { persistReducer } from "redux-persist";
// import rootWatcher from "../src/sagas/index";

const configureAppStore = (initialState = {}) => {
  // --------------------------------------------- saga conf
  // const sagaMiddleware = createSagaMiddleware();
  // const middlewares = [routerMiddleware(createBrowserHistory), sagaMiddleware];
  // ---------------------------------------------- persist conf
  // const persistConfig = {
  //   key: "root",
  //   storage,
  // };
  // const persistedReducer = persistReducer(persistConfig, createReducer());
  // ---------------------------------------------- Store
  const store = configureStore({
    reducer: createReducer(),
    // middleware: [...middlewares],
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== "production",
  });
  // sagaMiddleware.run(rootWatcher);
  // ------------------------------------------- for hot reload
  if (module.hot) {
    module.hot.accept("./combinedReducers", () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }
  return store;
};

export default configureAppStore;

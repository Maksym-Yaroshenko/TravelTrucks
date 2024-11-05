// src/redux/store.js

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import trucksSlicer from "./trucks/slicer.js";
import filtersSlicer from "./filters/slicer.js";
import reviewsSlicer from "./reviews/slicer.js"

const rootReducer = combineReducers({
  trucks: trucksSlicer,
  filters: filtersSlicer,
  reviews: reviewsSlicer,
});

const trucksPersistConfig = {
  key: "root",
  storage,
  whitelist: ["trucks"],
};

const persistedReducer = persistReducer(trucksPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export const persistor = persistStore(store);

export default store;

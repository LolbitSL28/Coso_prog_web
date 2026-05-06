import { configureStore } from "@reduxjs/toolkit";
import { usuariosReducer } from "./slices/usuariosSlice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/es/storage";
import { authReducer } from "./slices/authSlice";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "token"],
};

const persistAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    usuarios: usuariosReducer,
    auth: persistAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});
export const persistor = persistStore(store);

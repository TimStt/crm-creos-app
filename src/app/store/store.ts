// store.js

import { localeTranslateSlice } from "@/shared/stores/locale-translate";
import { themeSwitcherSlice } from "@/shared/stores/theme-swither";
import { lastCommitsSlice } from "@/widgets/commits/store";
import { designerSlice } from "@/shared/stores/disagners";

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // Используем localStorage для web
import { issueSlice } from "@/shared/stores/issue";
import { menuMobileSlice } from "@/shared/stores/menu-mobile";
// Импортируйте ваши редукторы здесь
// import userReducer from './userSlice';

// Комбинированный редуктор
const rootReducer = combineReducers({
  themeSwitcher: themeSwitcherSlice.reducer,
  localeTranslate: localeTranslateSlice.reducer,
  lastCommitsWithUssue: lastCommitsSlice.reducer,
  topDesigner: designerSlice.reducer,
  issue: issueSlice.reducer,
  menuMobile: menuMobileSlice.reducer,
});

// Конфигурация для redux-persist
const persistConfig = {
  key: "root",
  storage,
  // Добавьте сюда дополнительные конфигурации, если необходимо
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Настройка хранилища с отключенной проверкой на мутабельность
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: false, // Отключаем проверку на мутабельность
    }),
});

const persistor = persistStore(store);

export { store, persistor };

export type Store = typeof store;

export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;

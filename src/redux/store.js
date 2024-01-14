import contactReducer from './contactSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: contactReducer,
  // інші налаштування, які вам можуть знадобитися
});
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { configureStore } from '@reduxjs/toolkit';
// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
//   blacklist: ['filter'],
// };

// const persistedReducer = persistReducer(persistConfig, contactReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export let persistor = persistStore(store);

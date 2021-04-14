import {
  AnyAction,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { createEpicMiddleware, Epic } from 'redux-observable';
import storage from 'redux-persist/lib/storage';
import reducers, { RootState } from './reducers';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import epics from './epics';

export type MyEpic = Epic<AnyAction, AnyAction, RootState>;

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const epicMiddleware = createEpicMiddleware<AnyAction, AnyAction, RootState>();

const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    epicMiddleware,
  ],
});

epicMiddleware.run(epics);

export default store;

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice.ts";
import authReducer from "./features/auth/authSlice.ts";
import baseApi from "./api/api.ts";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
// import logger from "./middleware/logger.ts";

const persistConfig = {
    key: "auth",
    storage
}
const persistedAuthReducer = persistReducer(persistConfig, authReducer);


const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: persistedAuthReducer,
        [baseApi.reducerPath]: baseApi.reducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
})

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
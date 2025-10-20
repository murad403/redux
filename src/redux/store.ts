import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/features/counterSlice.ts";
import baseApi from "./api/api.ts";
// import logger from "./middleware/logger.ts";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        [baseApi.reducerPath]: baseApi.reducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;
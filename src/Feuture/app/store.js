import { configureStore } from "@reduxjs/toolkit"
import sroteSlice from "../reducers/storeReducer/storeSlice"
import cartSlice from "../reducers/cartReducer/cartSlice"
import paginationSlice from "../reducers/paginationReducer/paginationSlice"
import { productsApi } from '../reducers/storeReducer/apiSlice'
import  userSlice  from '../reducers/userReducer/userSlice'
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    store: sroteSlice,
    user: userSlice,
    pagination: paginationSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

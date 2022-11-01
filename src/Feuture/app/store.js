import { configureStore } from "@reduxjs/toolkit"
import sroteSlice from "../reducers/storeSlice"
import cartSlice from "../reducers/cartSlice"
import paginationSlice from "../reducers/paginationSlice"
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    store: sroteSlice,
    pagination: paginationSlice,
  },
})

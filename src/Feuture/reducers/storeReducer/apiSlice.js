
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
    getCategory: builder.query({
      query: (category) => `products/category/${category}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetCategoryQuery } = productsApi;



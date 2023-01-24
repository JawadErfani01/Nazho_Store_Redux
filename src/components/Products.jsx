import { useState } from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import { toast } from "react-toastify";
import SwitchBtn from "./SwitchBtn";
import Loading from "../components/Loading";
import MyPagoination from "./MyPagoination";
import SelectAmount from "./SelectAmount";
import SelectCategory from "./SelectCategory";
import { FaSearch } from "react-icons/fa";
import { products } from "../data/products";

import { useGetAllProductsQuery } from "../Feuture/reducers/storeReducer/apiSlice";

function Products() {
  const {
    data: allProductsData,
    isLoading,
    error,
    message,
  } = useGetAllProductsQuery();

  const [searchProduct, setsearchProduct] = useState("");
  const [data] = useState(products || allProductsData);
  const { currentPage, dataPerPage } = useSelector((state) => state.pagination);
  const indexOfLastCart = currentPage * dataPerPage;
  const indexOfFirstCart = indexOfLastCart - dataPerPage;
  // if you have internet connection use allProductsData instad of data in handelSearch method
  const handelSearch =
    !isLoading &&
    data.filter((item) => item.title.toLowerCase().includes(searchProduct));

  const newList =
    !isLoading && handelSearch.slice(indexOfFirstCart, indexOfLastCart);

  if (error && data.length < 0) {
    toast.error(message);
  }

  return (
    <div className="text-center">
      <h1 className="welcomeText p-5 pb-3  text-center">
        Welcome to Nazho Store
      </h1>

      <div className="text-center my-3  shadow md:flex w-[80%] m-auto md:w-[100%] md:justify-around items-center p-3 ">
        <form className="my-3 md:w-[25%]  relative">
          <input
            className="w-[100%] p-3 py-2 rounded-lg outline-none border   shadow-lg "
            placeholder="Search..."
            value={searchProduct}
            name="searchProduct"
            onChange={(e) => setsearchProduct(e.target.value)}
          />
          <span className="absolute right-[18px] opacity-50 top-[14px] ">
            <FaSearch />
          </span>
        </form>
        <div className="flex md:w-[50%]  justify-around items-center ">
          <SelectCategory />
          <SelectAmount />
        </div>
        <SwitchBtn />
      </div>

      <hr style={{ width: "96%", margin: "auto" }} />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 m-3 ">
          {newList.map((item, index) => (
            <div key={index} className="  m-3  ">
              <Product item={item} />
            </div>
          ))}
        </div>
      )}
      {handelSearch.length >= dataPerPage && (
        <MyPagoination handelSearch={handelSearch} />
      )}
    </div>
  );
}
export default Products;

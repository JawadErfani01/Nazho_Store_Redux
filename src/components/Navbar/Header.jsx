import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { handelLogout } from "../../Feuture/reducers/userReducer/userSlice";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showNav, setShowNav] = useState(false);
  const { NOrder } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.user);
  console.log(userInfo);
  const handelNav = () => {
    setShowNav(!showNav);
  };
  const Logout = () => {
    localStorage.removeItem("userInfo");
    dispatch(handelLogout());
    navigate("/");
  };
  return (
    <div
      style={{ backgroundColor: "#ecf0f3" }}
      className="fixed w-full h-20  shadow-xl z-[100]"
    >
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16 ">
        <Link to="/">
          <img
            src="favicon.ico"
            className="rounded-full"
            height={80}
            width={80}
            alt="logo"
          />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link to="/">
              <li className="ml-10 cursor-pointer text-sm uppercase hover:border-b">
                HOME
              </li>
            </Link>

            {userInfo !== null ? (
              <>
                <li
                  onClick={() => Logout()}
                  className="ml-10 cursor-pointer text-sm uppercase hover:border-b"
                >
                  Logout
                </li>
                <Link to="/userProfile">
                  <li className="ml-10 cursor-pointer text-sm uppercase hover:border-b">
                    Profile
                  </li>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <li className="ml-10 cursor-pointer text-sm uppercase hover:border-b">
                    Login
                  </li>
                </Link>
                <Link to="/register">
                  <li className="ml-10 cursor-pointer text-sm uppercase hover:border-b">
                    Register
                  </li>
                </Link>
              </>
            )}
            <div className="relative mx-5 ">
              <Link to="/Cart" className="text-yellow-400  ">
                <FaShoppingCart size={28} />
              </Link>
              <span className="bg-blue-300 left-5 top-[-10px] absolute rounded-full flex justify-center items-center w-4 p-2 h-4 ">
                {NOrder}
              </span>
            </div>
          </ul>
          <div className="flex">
            <div className="relative mx-5 md:hidden">
              <Link to="/Cart" className="text-yellow-400  ">
                <FaShoppingCart size={28} />
              </Link>
              <span className="bg-blue-300 left-5 top-[-10px] absolute rounded-full flex justify-center items-center w-4 p-2 h-4 ">
                {NOrder}
              </span>
            </div>
            <div onClick={handelNav} className="md:hidden cursor-pointer">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          showNav
            ? "md:hidden fixed top-0 left-0 w-full h-screen ease-in duration-700 bg-black/70"
            : ""
        }
      >
        <div
          className={
            showNav
              ? "fixed top-0 left-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen   p-10 ease-in duration-500"
              : "fixed top-0 left-[-120%] p-10  h-screen   ease-in duration-700"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between ">
              <img src="favicon.ico" height={35} width={87} alt="logo" />
              <div
                onClick={handelNav}
                className="rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer"
              >
                {" "}
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-500 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's connect and build samething togerther{" "}
              </p>
            </div>
          </div>
          <div>
            <ul className="uppercase">
              {userInfo === null ? (
                <>
                  <Link to="/">
                    <li
                      onClick={() => handelNav()}
                      className="my-4 text-sm cursor-pointer"
                    >
                      Home
                    </li>
                  </Link>

                  <Link to="/login">
                    <li
                      onClick={() => handelNav()}
                      className="my-4 text-sm cursor-pointer"
                    >
                      Login
                    </li>
                  </Link>
                  <Link to="/register">
                    <li
                      onClick={() => handelNav()}
                      className="my-4 text-sm cursor-pointer"
                    >
                      Register
                    </li>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/">
                    <li
                      onClick={() => handelNav()}
                      className="my-4 text-sm cursor-pointer"
                    >
                      Home
                    </li>
                  </Link>
                  <Link to="/userProfile">
                    <li
                      onClick={() => handelNav()}
                      className="my-4 text-sm cursor-pointer"
                    >
                      profile
                    </li>
                  </Link>

                  <li
                    onClick={() => Logout()}
                    className="my-4 text-sm cursor-pointer"
                  >
                    Logout
                  </li>
                </>
              )}
            </ul>
            <div className="pt-10">
              <p className="uppercase tracking-wide text-blue-500">
                Let's connect
              </p>
              <div className="flex items-center justify-between my-4 w-full md:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <a href="https://github.com/JawadErfani01">
                    <FaGithub />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <a href="https://www.linkedin.com/in/jawad-erfani-610197195/">
                    <FaLinkedinIn />
                  </a>
                </div>

                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <a href="https://twitter.com/JawadErfani01">
                    <FaTwitter />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <AiOutlineMail />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

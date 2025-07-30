import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { SiSellfy } from "react-icons/si";
import { notify } from "../../utils/helper/notification";
import Cart from "../../pages/cart";
import { useCookies } from "react-cookie";

function Navbar() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies([
    "user_access_token",
    "seller_access_token",
    "brandName",
  ]);

  const userDropdownRef = useRef();
  const sellerDropdownRef = useRef();

  const [openCart, setOpenCart] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showSellerDropdown, setShowSellerDropdown] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target)
      ) {
        setShowUserDropdown(false);
      }

      if (
        sellerDropdownRef.current &&
        !sellerDropdownRef.current.contains(event.target)
      ) {
        setShowSellerDropdown(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-green-900 text-white shadow-md">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 md:px-12 h-16">
        <a href="/" className="flex items-center text-white font-bold text-2xl">
          <span className="text-green-500">Crop</span>Connect
        </a>
        <div className="flex flex-row gap-4 md:gap-8 text-lg md:text-xl">
          {/* User Dropdown */}
          <div
            ref={userDropdownRef}
            className="relative flex flex-row gap-1 justify-center items-center cursor-pointer"
            onMouseEnter={() => {
              setShowUserDropdown(true);
              setShowSellerDropdown(false);
            }}
            onClick={() => {
              if (!cookies.user_access_token) {
                navigate("/account/user");
              }
            }}
          >
            <FaUserCircle />
            <span className="hidden md:block">User</span>
            {cookies.user_access_token && (
              <div
                className={`absolute ${showUserDropdown ? "block" : "hidden"} top-10 right-0 z-10 bg-white text-gray-800 shadow-md rounded-lg py-2 px-4`}
              >
                <ul className="text-sm">
                  <li
                    onClick={() => {
                      setCookie("user_access_token", "", { expires: new Date(0) });
                      notify("User Logged Out", "info");
                      navigate("/");
                    }}
                    className="py-2 px-3 hover:bg-gray-100 rounded"
                  >
                    User Logout
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Seller Dropdown */}
          <div
            ref={sellerDropdownRef}
            className="relative flex flex-row gap-1 justify-center items-center cursor-pointer"
            onMouseEnter={() => {
              setShowSellerDropdown(true);
              setShowUserDropdown(false);
            }}
            onClick={() => {
              if (!cookies.seller_access_token) {
                navigate("/account/seller");
              }
            }}
          >
            <SiSellfy />
            <span className="hidden md:block">Seller</span>
            {cookies.seller_access_token && (
              <div
                className={`absolute ${showSellerDropdown ? "block" : "hidden"} top-10 right-0 z-10 bg-white text-gray-800 shadow-md rounded-lg py-2 px-4`}
              >
                <ul className="text-sm">
                  <li
                    onClick={() => navigate("/sellerdashboard")}
                    className="py-2 px-3 hover:bg-gray-100 rounded"
                  >
                    Seller Dashboard
                  </li>
                  <li
                    onClick={() => {
                      setCookie("seller_access_token", "", { expires: new Date(0) });
                      setCookie("brandName", "", { expires: new Date(0) });
                      notify("Seller Logged Out", "info");
                      navigate("/");
                    }}
                    className="py-2 px-3 hover:bg-gray-100 rounded"
                  >
                    Seller Logout
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Cart Icon */}
          <div
            className="relative flex flex-row gap-1 justify-center items-center cursor-pointer"
            onClick={() => setOpenCart(true)}
          >
            <AiOutlineShoppingCart />
            <span className="hidden md:block">Cart</span>
            {openCart && <Cart setOpenCart={setOpenCart} />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useEffect, useState } from "react";
import CartCard from "../../components/cart/CartCard";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { notify } from "../../utils/helper/notification";

function Cart({ setOpenCart }) {
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cartReducer);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let amount = 0;
    cartData.forEach((item) => {
      amount += item.currentPrice;
    });
    setTotalAmount(amount);
  }, [cartData]);

  return (
    <div className="relative z-50">
      <div className="fixed inset-0 bg-gray-800 bg-opacity-70"></div>

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
            <div className="pointer-events-auto w-screen md:max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl rounded-l-lg">
                <div className="flex-1 overflow-y-auto px-6 py-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-blue-900">
                      Shopping Cart
                    </h2>
                    <button
                      type="button"
                      className="p-2 text-blue-500 hover:text-blue-700 transition"
                      onClick={() => setOpenCart(false)}
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul className="-my-6 divide-y divide-gray-300">
                        {cartData.map((item, index) => (
                          <CartCard item={item} key={index} />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-300 px-6 py-6 bg-gray-50">
                  <div className="flex justify-between text-lg font-medium text-blue-900">
                    <p>Subtotal</p>
                    <p>₹{totalAmount}</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <button
                      className="w-full flex items-center justify-center rounded-md bg-blue-600 py-3 text-lg font-semibold text-white hover:bg-blue-700 transition"
                      onClick={() => {
                        if (cartData.length === 0) {
                          notify("Please add some products to cart first", "info");
                        } else {
                          navigate("/orders");
                          setOpenCart(false);
                        }
                      }}
                    >
                      Checkout
                    </button>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm">
                    <p>
                      or{" "}
                      <button
                        type="button"
                        className="font-semibold text-blue-600 hover:text-blue-800 transition"
                        onClick={() => setOpenCart(false)}
                      >
                        Continue Shopping &rarr;
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

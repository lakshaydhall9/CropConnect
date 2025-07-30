import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFromCart, increaseProductQty, decreaseProductQty } from "../../redux/actions";

function CartCard({ item }) {
  const dispatch = useDispatch();

  const removeProductFromCart = () => {
    dispatch(removeFromCart(item._id));
  }

  const incQty = () => {
    dispatch(increaseProductQty(item._id));
  }

  const decQty = () => {
    dispatch(decreaseProductQty(item._id));
  }

  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-green-200">
        <img
          src={item.image}
          loading="lazy"
          alt="Image"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-green-900">
            <h3>
              <a href="#">{item.name}</a>
            </h3>
            <p className="ml-4 text-green-700">Rs. {item.currentPrice}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{item.brand}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex flex-row h-9 w-full rounded-lg relative bg-transparent mt-1">
            {/* Decrease Quantity Button */}
            <button
              className="flex justify-center items-center bg-green-100 text-green-600 hover:text-green-700 hover:bg-green-200 h-full px-3 rounded-l cursor-pointer outline-none"
              onClick={(e) => {
                e.preventDefault();
                decQty();
              }}
            >
              <AiOutlineMinus />
            </button>
            
            {/* Quantity Display */}
            <span className="focus:outline-none border-t-2 border-b-2 border-green-100 px-4 text-center font-semibold text-md flex items-center text-green-700 outline-none">
              {item.qty} {item.unit}
            </span>
            
            {/* Increase Quantity Button */}
            <button
              className="flex justify-center items-center bg-green-100 text-green-600 hover:text-green-700 hover:bg-green-200 h-full px-3 rounded-r cursor-pointer outline-none"
              onClick={(e) => {
                e.preventDefault();
                incQty();
              }}
            >
              <AiOutlinePlus />
            </button>
          </div>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-yellow-600 hover:text-yellow-500"
              onClick={(e) => {
                e.preventDefault();
                removeProductFromCart();
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartCard;

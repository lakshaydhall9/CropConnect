import React from "react";
import { addProductData } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // For cart icon

function ProductCard({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToDetailsPage = () => {
    dispatch(addProductData(data));
    navigate(`details/${data._id}`);
  };

  return (
    <div
      className="w-full cursor-pointer hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
      onClick={goToDetailsPage}
    >
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white hover:bg-gray-50 transition-all duration-300 ease-in-out">
        {/* Product Image */}
        <img
          className="lg:h-48 h-28 w-full object-cover object-center transition-all duration-300 ease-in-out hover:scale-110"
          src={data.image}
          alt="product"
        />
        <div className="px-3 md:px-6 pt-3 md:pt-6 pb-1 md:pb-4">
          {/* Product Name */}
          <h1 className="title-font text-base md:text-lg font-medium text-gray-900 mb-1 hover:text-teal-500">
            {data.name}
          </h1>

          {/* Product Brand */}
          <h2 className="text-xs mb-1 md:mb-2 font-medium text-gray-400">
            BRAND: {data.brand}
          </h2>

          {/* Product Price */}
          <p className="mb-1 text-sm md:text-base text-red-500 font-semibold">
            Rs.{data.pricePerUnit}/{data.measuringUnit}
          </p>

          {/* Minimum Order Quantity */}
          <h2 className="text-xs title-font font-medium text-gray-400 mb-2">
            Minimum Order Quantity: {data.minimumOrderQuantity}
            {data.measuringUnit}
          </h2>

          {/* Cart Icon (Optional) */}
          <div className="flex justify-between items-center mt-2">
            <button className="flex items-center space-x-2 text-teal-500 font-medium text-xs">
              <FaShoppingCart />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

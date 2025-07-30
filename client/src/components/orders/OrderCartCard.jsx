import React from "react";

function OrderCartCard({ item }) {
  return (
    <div className="mt-4 md:mt-6 flex flex-col md:flex-row gap-4 justify-start items-start md:items-center w-full bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
      {/* Product Image */}
      <div className="w-full md:w-40 h-40 overflow-hidden rounded-md bg-gray-200">
        <img
          loading="lazy"
          className="w-full h-full object-cover"
          src={item.image}
          alt="product"
        />
      </div>
      
      {/* Product Info */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full space-y-4 md:space-y-0 md:space-x-6 border-b md:border-none pb-8 md:pb-0">
        {/* Product Name and Details */}
        <div className="w-full flex flex-col justify-start space-y-2">
          <h3 className="text-lg md:text-xl xl:text-2xl font-semibold text-gray-900">
            {item.name}
          </h3>
          <div className="text-sm text-gray-600">
            <p className="leading-tight">
              <span className="text-gray-400">Brand: </span> {item.brand}
            </p>
            <p className="leading-tight">
              <span className="text-gray-400">Minimum Order Quantity: </span>
              {item.minQty} {item.unit}
            </p>
          </div>
        </div>
        
        {/* Pricing and Quantity */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
          <p className="text-base xl:text-lg leading-6 text-gray-800">
            Rs. {item.pricePerUnit}/{item.unit}
          </p>
          <p className="text-base xl:text-lg leading-6 text-gray-800">
            {item.qty} {item.unit}
          </p>
          <p className="text-base xl:text-lg font-semibold leading-6 text-gray-900">
            Rs. {item.currentPrice}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderCartCard;

import React from "react";
import BoxSkeleton from "./BoxSkeleton";

const ProductSkeleton = ({ noOfBoxes = 8 }) => {
  return (
    <div className="px-4 py-8 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 md:gap-8">
        {Array(noOfBoxes)
          .fill(0)
          .map((box, index) => (
            <BoxSkeleton
              key={index}
              height="h-[200px] md:h-[320px]" // Ensure consistent height
              width="w-full"
              radius="rounded-lg"
              paddingX="px-4"
              paddingY="py-4"
              bgColor="bg-gray-200"
              className="shadow-md transform hover:scale-105 transition duration-200 ease-in-out"
            />
          ))}
      </div>
    </div>
  );
};

export default ProductSkeleton;

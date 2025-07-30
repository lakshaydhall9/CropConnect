import React from "react";
import BoxSkeleton from "./BoxSkeleton";

const FAQSellerSkeleton = ({ noOfBoxes = 10 }) => {
  return (
    <div className="px-4 mx-auto my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {Array(noOfBoxes)
          .fill(0)
          .map((box, index) => (
            <BoxSkeleton
              key={index}
              width="w-full"
              height="h-36" // Adjust height for a more balanced look
              radius="rounded-xl"
              paddingX="px-6"
              paddingY="py-4"
              bgColor="bg-gray-200"
              className="shadow-lg transform hover:scale-105 transition duration-200 ease-in-out"
            />
          ))}
      </div>
    </div>
  );
};

export default FAQSellerSkeleton;

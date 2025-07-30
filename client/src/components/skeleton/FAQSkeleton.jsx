import React from "react";
import BoxSkeleton from "./BoxSkeleton";

const FAQSkeleton = ({ noOfBoxes = 6 }) => {
  return (
    <div className="px-4 py-8 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {Array(noOfBoxes)
          .fill(0)
          .map((box, index) => (
            <BoxSkeleton
              key={index}
              width="w-full"
              radius="rounded-lg"
              height="h-24 sm:h-32 md:h-40"  // Adjusting the height to be responsive
              paddingX="px-4"
              paddingY="py-3"
              bgColor="bg-gray-200"
              className="shadow-lg transform hover:scale-105 transition duration-200 ease-in-out"
            />
          ))}
      </div>
    </div>
  );
};

export default FAQSkeleton;

import React from "react";
import BoxSkeleton from "./BoxSkeleton";

const GraphSkeleton = ({ noOfBoxes = 4 }) => {
  return (
    <div className="px-4 py-8 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        {Array(noOfBoxes)
          .fill(0)
          .map((box, index) => (
            <BoxSkeleton
              key={index}
              width="w-full"
              radius="rounded-lg"
              height="h-[320px]" // Keeping a consistent height for graphs
              paddingX="px-6"
              paddingY="py-4"
              bgColor="bg-gray-200"
              className="shadow-md transform hover:scale-105 transition duration-200 ease-in-out"
            />
          ))}
      </div>
    </div>
  );
};

export default GraphSkeleton;

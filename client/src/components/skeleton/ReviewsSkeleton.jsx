import React from "react";
import BoxSkeleton from "./BoxSkeleton";

const ReviewsSkeleton = ({ noOfBoxes = 2 }) => {
  return (
    <div className="px-4 py-8 mx-auto w-full">
      <div className="flex flex-col justify-start items-start space-y-6 md:space-y-8">
        {Array(noOfBoxes)
          .fill(0)
          .map((box, index) => (
            <BoxSkeleton
              key={index}
              height="h-[100px] md:h-[220px]" // Adjust height for better readability
              width="w-full"
              radius="rounded-lg" // Rounded corners for a softer feel
              paddingX="px-6"
              paddingY="py-4"
              bgColor="bg-gray-200"
              className="shadow-md animate-pulse"
            />
          ))}
      </div>
    </div>
  );
};

export default ReviewsSkeleton;

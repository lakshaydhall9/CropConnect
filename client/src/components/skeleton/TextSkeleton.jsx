import React from "react";
import BoxSkeleton from "./BoxSkeleton";

const TextSkeleton = ({
  noOfRows = 6,
  fontSizeHeightMd = "h-[16px]",
  fontSizeHeight = "h-[14px]",
  width = "w-full",
  spacing = "gap-2", // Adds customizable gap between rows
}) => {
  return (
    <div className={`grid ${spacing} ${width}`}>
      {Array(noOfRows)
        .fill(0)
        .map((_, index) => (
          <BoxSkeleton
            key={index}
            width="w-full"
            radius="rounded"
            height={`${fontSizeHeightMd} md:${fontSizeHeight}`}
          />
        ))}
    </div>
  );
};

export default TextSkeleton;

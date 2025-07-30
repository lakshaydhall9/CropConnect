import React from "react";

function BoxSkeleton({
  height = "h-10", // Default height if not provided
  width = "w-full", // Default width if not provided
  paddingX = "px-4", // Default horizontal padding
  paddingY = "py-2", // Default vertical padding
  radius = "rounded-md", // Default border radius
  bgColor = "bg-gray-300", // Customizable background color
  border = "border-0", // Option for border
  className = "", // Allows adding extra custom classes
}) {
  return (
    <div
      className={` ${bgColor} ${radius} ${paddingX} ${paddingY} ${height} ${width} ${border} animate-pulse ${className}`}
    ></div>
  );
}

export default BoxSkeleton;

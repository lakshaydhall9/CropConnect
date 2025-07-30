import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ rate, setRate, size = "text-xl" }) => {

  // Handles mouse hover to preview rating before selecting
  const [hoverRate, setHoverRate] = React.useState(0);

  const handleHover = (rating) => {
    setHoverRate(rating);
  };

  const handleClick = (rating) => {
    setRate(rating);
  };

  return (
    <div className={`flex justify-center items-center ${size}`}>
      {[...Array(5)].map((_, index) => {
        const givenRating = index + 1;
        const isFilled = givenRating <= (hoverRate || rate); // Display filled for hover or selected

        return (
          <label
            key={givenRating}
            className="cursor-pointer relative"
            onMouseEnter={() => handleHover(givenRating)}  // Highlight stars on hover
            onMouseLeave={() => handleHover(0)}  // Reset hover when leaving
            onClick={() => handleClick(givenRating)}  // Set rating on click
          >
            <input
              type="radio"
              value={givenRating}
              className="hidden"
              onChange={() => {}}
            />
            <div className="relative">
              <FaStar
                className={`transition-colors duration-300 ease-in-out ${isFilled ? "text-teal-500" : "text-gray-300"}`}
                size={size === "text-xl" ? 24 : size === "text-lg" ? 20 : 32}
              />
            </div>
            {/* Optional Tooltip */}
            {hoverRate === givenRating && (
              <div className="absolute top-0 -mt-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-700">
                {givenRating} Star{givenRating > 1 ? "s" : ""}
              </div>
            )}
          </label>
        );
      })}
    </div>
  );
};

export default Rating;

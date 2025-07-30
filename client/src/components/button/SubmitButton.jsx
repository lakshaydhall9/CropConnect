import React from "react";
import Spinner from "../loading/Spinner";

const SubmitButton = ({ bgColor, hoverBgColor, text, isLoading }) => {
  return (
    <button
      type="submit"
      className={`w-full flex justify-center items-center text-white ${bgColor} hover:${hoverBgColor} font-semibold rounded-full text-sm px-6 py-3 transition duration-200 ease-in-out transform hover:scale-105 shadow-lg`}
      disabled={isLoading}
    >
      {isLoading ? (
        <Spinner width="w-5" color="#ffffff" />
      ) : (
        <span className="tracking-wide">{text}</span>
      )}
    </button>
  );
};

export default SubmitButton;

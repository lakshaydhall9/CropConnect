import React from "react";
import { FaShareAlt } from "react-icons/fa";

const ShareButton = ({ url }) => {
  const handleShareButton = () => {
    if (navigator.share) {
      console.log("Congrats! Your browser supports Web Share API");
      navigator
        .share({
          url: url,
        })
        .then(() => {
          console.log("Sharing successful");
        })
        .catch(() => {
          console.log("Sharing failed");
        });
    } else {
      console.log("Sorry! Your browser does not support Web Share API");
    }
  };

  return (
    <button
      onClick={handleShareButton}
      className="bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 shadow-md rounded-full px-5 py-2 font-semibold text-sm md:text-base text-white flex items-center gap-2 transition duration-200 ease-in-out transform hover:scale-105"
    >
      <FaShareAlt className="text-lg" />
      Share
    </button>
  );
};

export default ShareButton;

import React from "react";
import useProgressiveImg from "../../hooks/image/useProgressiveImg";

function CategoryCard(props) {
  const [src, { blur }] = useProgressiveImg(props.compressedImg, props.image);

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer transition-transform transform hover:scale-105">
      <img
        src={src}
        loading="lazy"
        className={`w-full h-32 md:h-56 object-cover ${
          blur ? "blur-sm" : "blur-none"
        }`}
        alt={props.title}
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h5 className="text-lg font-bold text-yellow-200 md:text-xl font-serif">
          {props.title}
        </h5>
        <p className="text-sm text-yellow-100 md:text-base mt-2">
          Discover fresh produce and more!
        </p>
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 bg-[hsla(0,0%,99.2%,0.2)]"></div>
    </div>
  );
}

export default CategoryCard;

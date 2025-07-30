import React from "react";
import CategoryCard from "../../components/home/CategoryCard";
import { Link } from "react-router-dom";

const categoryProductData = [
  {
    title: "Rice",
    image: "/images/product-category/rice.webp",
    compressedImg: "/images/product-category/rice-compressed.webp",
  },
  {
    title: "Wheat",
    image: "/images/product-category/wheat.webp",
    compressedImg: "/images/product-category/wheat-compressed.webp",
  },
  {
    title: "Nuts",
    image: "/images/product-category/nuts.webp",
    compressedImg: "/images/product-category/nuts-compressed.webp",
  },
  {
    title: "Sugar",
    image: "/images/product-category/sugar.webp",
    compressedImg: "/images/product-category/sugar-compressed.webp",
  },
  {
    title: "Spices",
    image: "/images/product-category/spices.webp",
    compressedImg: "/images/product-category/spices-compressed.webp",
  },
  {
    title: "Fruits",
    image: "/images/product-category/fruits.webp",
    compressedImg: "/images/product-category/fruits-compressed.webp",
  },
  {
    title: "Vegetables",
    image: "/images/product-category/vegetables.webp",
    compressedImg: "/images/product-category/vegetables-compressed.webp",
  },
  {
    title: "Pulses",
    image: "/images/product-category/pulses.webp",
    compressedImg: "/images/product-category/pulses-compressed.webp",
  },
];

function Category() {
  return (
    <div className="grid gap-2 md:gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {categoryProductData.map((item, index) => (
        <Link to={`/category/${item.title.toLowerCase()}`} key={index}>
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
            <CategoryCard
              title={item.title}
              image={item.image}
              compressedImg={item.compressedImg}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-500 to-blue-600 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg transition-opacity duration-300 group-hover:opacity-100 opacity-0">
              {item.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Category;

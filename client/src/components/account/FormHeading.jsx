import React from "react";

const FormHeading = ({ type, isSignInForm }) => {
  return (
    <h2 className="text-center text-3xl font-semibold leading-10 tracking-tight text-brown-700">
      {isSignInForm ? "Log in to" : "Create"}{" "}
      <span
        className={`${
          type === "seller" ? "text-green-600" : "text-yellow-600"
        }`}
      >
        {type === "user" ? "Farmer" : "Seller"} 
      </span>{" "}
      account
    </h2>
  );
};

export default FormHeading;

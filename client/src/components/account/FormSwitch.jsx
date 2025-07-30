import React from "react";

const FormSwitch = ({ type, isSignInForm, setIsSignInForm }) => {
  return (
    <p className="text-sm text-center font-medium text-gray-700 dark:text-gray-300">
      {isSignInForm ? "Don't have an account yet?" : "Already have an account?"}{" "}
      <a
        className={`font-medium ${
          type === "seller" ? "text-green-600" : "text-yellow-600"
        } hover:text-green-700 cursor-pointer`}
        onClick={() => setIsSignInForm((prev) => !prev)}
      >
        {isSignInForm ? "Create an account" : "Sign In"}
      </a>
    </p>
  );
};

export default FormSwitch;

import React from "react";

const Heading = ({
  text,
  marginY = "my-6 md:my-8",
  textAlign = "text-center",
  paddingX = "px-4",
}) => {
  return (
    <h1
      className={`leading-none ${textAlign} tracking-tight text-green-800 text-xl md:text-2xl lg:text-3xl font-semibold ${marginY} ${paddingX}`}
    >
      {text}
    </h1>
  );
};

export default Heading;

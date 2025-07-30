import React from "react";

const InputTag = ({
  label,
  type,
  placeholder,
  outlineColor,
  value,
  setFormData,
  toUpdate
}) => {
  return (
    <div className="mb-6">
      <label className="block mb-2 text-sm font-medium text-green-800">{label}</label>
      <input
        type={type}
        className={`bg-white border text-green-800 border-green-500 focus:ring-green-600 focus:border-green-600 text-sm rounded-lg block w-full p-3 shadow-md placeholder:text-green-500 ${outlineColor}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setFormData((prev) => ({
            ...prev,
            [toUpdate]: e.target.value,
          }));
        }}
        required
      />
    </div>
  );
};

export default InputTag;

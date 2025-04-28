import React from "react";
import Spinner from "./spinner";

const Button = ({
  children,
  onClick,
  type = "button",
  loading = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`px-4 py-2 text-white rounded-lg
        shadow-md 
        hover:brightness-110 
        transition-all 
        cursor-pointer 
        disabled:opacity-60 disabled:cursor-not-allowed 
        flex items-center justify-center gap-2
        ${className}`}
    >
      {loading && <Spinner />}
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;

import React from "react";

const Card = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className="flex justify-between items-center my-3 p-5 rounded-[20px] bg-[#ca4574]"
    >
      {children}
    </div>
  );
};

export default Card;

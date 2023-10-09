import React, { ReactElement } from "react";
interface CardProps {
  children: ReactElement | ReactElement[];
  variant?: "black" | "white";
  classNames?: string;
  typeOfRounded?: "normal" | "medium" | "full";
}
function Card({
  children,
  classNames,
  variant = "white",
  typeOfRounded = "medium",
}: CardProps) {
  const roundedType =
    typeOfRounded === "normal"
      ? "rounded-md"
      : typeOfRounded === "full"
      ? "rounded-full"
      : "rounded-3xl";

  return (
    <div
      className={` ${roundedType} py-10 px-12 ${
        variant === "white"
          ? "border-[#298EF6] bg-white border"
          : "border-[#fff] border-[1.5px]"
      } ${classNames}`}
    >
      {children}
    </div>
  );
}

export default Card;

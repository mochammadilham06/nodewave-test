import React from "react";
interface ButtonProps {
  teks?: string;
  size?: "normal" | "medium" | "large";
}
function Button({ teks, size = "normal" }: ButtonProps) {
  const isSize =
    size === "normal"
      ? "py-2 px-4"
      : size === "medium"
      ? "py-4 px-6"
      : "py-3 px-10";

  return (
    <button className={`${isSize} bg-[#00AD98] rounded-3xl`}>{teks}</button>
  );
}

export default Button;

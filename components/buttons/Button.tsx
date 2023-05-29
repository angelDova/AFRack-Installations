"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  black?: boolean;
  small?: boolean;
  icon?: IconType;
  btnName?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  black,
  small,
  icon: Icon,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
      flex justify-between px-1 pl-4 items-center gap-4 py-[5px]  rounded-full
      ${black ? "bg-black text-white" : "bg-gray-300"}
      `}
    >
      {label}
      {Icon && (
        <Icon
          size={28}
          className="
            
          "
        />
      )}
    </button>
  );
};

export default Button;

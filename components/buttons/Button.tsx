"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  dark?: boolean;
  small?: boolean;
  icon?: IconType;
  btnName?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  dark,
  small,
  icon: Icon,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
      flex justify-between px-1 pl-4 items-center gap-4 py-[5px]  rounded-full
      ${dark ? "bg-dark text-light" : "bg-gray-300"}
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

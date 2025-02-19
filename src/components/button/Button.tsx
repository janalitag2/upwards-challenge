import React from "react";

type ButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
  icon?: string;
  children?: React.ReactNode;
  className?: string;
};

export default function Button(props: ButtonProps) {
  const { disabled, onClick, children, className } = props;
  return (
    <button
      className={`button ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

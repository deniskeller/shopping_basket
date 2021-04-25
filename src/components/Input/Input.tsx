import React from "react";

interface IInputProps {
  value: string;
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
  pattern?: string;
  className?: string;
  onChange(value: string): void;
}

const Input: React.FC<IInputProps> = ({
  value,
  type,
  name,
  required,
  placeholder,
  pattern,
  className,
  onChange,
}) => {
  return (
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      className={className}
      name={name}
      pattern={pattern}
      required={required}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value.trim())
      }
      data-testid="input"
    />
  );
};
export default Input;

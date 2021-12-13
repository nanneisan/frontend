import React from "react";
import TextField from "@material-ui/core/TextField";

function Input(props) {
  const {
    id,
    variant,
    label,
    size,
    className,
    fullWidth = false,
    name,
    handleChange,
    type,
    disabled,
  } = props;
  return (
    <TextField
      id={id}
      variant={variant}
      label={label}
      size={size}
      className={className}
      fullWidth={fullWidth}
      name={name}
      onChange={handleChange}
      type={type}
      disabled={disabled}
    />
  );
}

export default Input;

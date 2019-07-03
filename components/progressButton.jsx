import React from "react";


/**
 * A button that alters progress state. Abstract (?)
 * 
 */
const primary = "primary_style";

const ProgButton = props => {
  const { variant, disabled, children, onClick } = props;

  // This is the default style
  let backgroundColor = "white";
  let color = "black";
  let border = '1';
  let base_size = 50;
  let ratio = 1;

  // Which variant do we want?
  switch (variant) {
    case primary:
      backgroundColor = "red";
      color = "white";
      border = '5px solid #ccc';
      ratio = 0.8;
      break;
    case "secondary":
      backgroundColor = "green";
      color = "white";
      ratio = 1.5;
      break;
    case "inactive":
      break;
    default:
      break;
  }


  let height = base_size * ratio;
  let width = base_size / ratio;

  // Let's build the style based on the variant
  // We also add properties depending on the `disabled` state
  const style = {
    backgroundColor,
    color,
    border,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    height,
    width,
  };

  return (
    <button onClick={onClick} disabled={disabled} style={style}>
      {children}
    </button>
  );
};

export default ProgButton;
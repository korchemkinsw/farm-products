import React, { useState } from "react";
import { typeText } from "/src/components/ui/text/text";
import { StyledLabel, StyledCheckbox } from "./styled";
import { ReactComponent } from "/src/assets/check.svg";

export default function ChoiseProduct({
  product,
  selected,
  onChange,
  onClick,
  ...props
}) {
  const [checked, setChecked] = useState(false);

  return (
    <StyledLabel
      as="label"
      type={typeText.body18}
      onClick={() => onClick(product.id)}
    >
      {product.name}
      <StyledCheckbox as="span" className={checked && "checked"}>
        {checked && <ReactComponent />}
      </StyledCheckbox>
      <input
        name={product.id}
        value={checked}
        onChange={() => {
          setChecked(!checked);
          onChange(product.id);
        }}
        {...props}
        type="checkbox"
      />
    </StyledLabel>
  );
}

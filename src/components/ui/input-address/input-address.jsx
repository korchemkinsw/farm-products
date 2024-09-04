import React from "react";
import { StyledInputAddress } from "./styled";

export default function InputAddress({ address, onChange }) {
  return (
    <StyledInputAddress>
      <input
        type="addrwss"
        name="address"
        value={address}
        placeholder="Введите адрес доставки"
        onChange={(event) => onChange(event.target.value)}
      />
    </StyledInputAddress>
  );
}

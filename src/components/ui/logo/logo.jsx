import React from "react";
import { ReactComponent } from "/src/assets/logo.svg";
import { LogoLink } from "./styles";

export default function Logo() {
  return (
    <LogoLink to="/" className="logo__link">
      <ReactComponent />
      Фермерские продукты
    </LogoLink>
  );
}

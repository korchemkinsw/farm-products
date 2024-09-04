import React from "react";
import { Ul, Li } from "/src/components/styled/index";
import { StyledLink } from "./styles";

export default function Navigation() {
  return (
    <Ul>
      <Li>
        <StyledLink to="/">Главная</StyledLink>
      </Li>
      <Li>
        <StyledLink to="/order">Купить</StyledLink>
      </Li>
    </Ul>
  );
}

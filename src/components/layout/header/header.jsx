import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Navigation from "/src/components/layout/nav/nav";
import { HeaderPage, StyledLink } from "./styles";

export default function Header({ page }) {
  return (
    <HeaderPage className="header">
      <Logo />
      <Navigation />
    </HeaderPage>
  );
}

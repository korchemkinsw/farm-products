import React from "react";
import { StyledButton } from "./styled";

export default function Button({ children, minWidth, link, ...props }) {
  return (
    <StyledButton
      {...props}
      $minWidth={minWidth}
      {...(link ? { to: link } : { as: "button", type: "button" })}
    >
      {children}
    </StyledButton>
  );
}

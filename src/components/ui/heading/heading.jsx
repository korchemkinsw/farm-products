import React from "react";
import { StyledHeading } from "./stiles";

export const TitleLevel = {
  H1: "1",
  H2: "2",
  H3: "3",
  H4: "4",
};

export default function Heading({ children, level }) {
  return (
    <StyledHeading as={`h${level}`} $level={level}>
      {children}
    </StyledHeading>
  );
}

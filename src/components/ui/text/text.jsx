import React from "react";
import { StyledText } from "./styles";

export const typeText = {
  body18: "18",
  body18b: "18b",
  body14: "14",
  body14b: "14b",
};

export default function Text({ children, type }) {
  return <StyledText $type={type}>{children}</StyledText>;
}

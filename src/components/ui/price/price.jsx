import React from "react";
import { StyledPrice } from "./styled";
import Heading, { TitleLevel } from "/src/components/ui/heading/heading";
import Text, { typeText } from "/src/components/ui/text/text";

export default function Price({ price }) {
  return (
    <StyledPrice>
      <Text type={typeText.body14}>Цена</Text>
      <Heading level={TitleLevel.H4}>{price}</Heading>
    </StyledPrice>
  );
}

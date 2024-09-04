import React from "react";
import Feature from "/src/components/ui/feature/feature";
import Button from "/src/components/ui/button/button";
import Heading from "/src/components/ui/heading/heading";
import { TitleLevel } from "/src/components/ui/heading/heading";
import { StyledSection, StyledUl } from "./styles";

export default function Features({ features }) {
  return (
    <StyledSection className="features__wrapper">
      <Heading level={TitleLevel.H2}>Почему фермерские продукты лучше?</Heading>
      <StyledUl className="features__list">
        {features.map((item) => (
          <Feature {...item} />
        ))}
      </StyledUl>
      <Button link="/order" minWidth={260}>
        Купить
      </Button>
    </StyledSection>
  );
}

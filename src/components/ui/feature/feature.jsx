import React from "react";
import {
  StyledLi,
  StyledImg,
  StyledHeading,
  StyledTitle,
  StyledType,
  StyleDescription,
} from "./styles";

export default function Feature(feature) {
  const classItem = feature.rating ? "positive" : "negative";
  const type = feature.rating ? "Фермерские продукты" : "Магазинные продукты";
  return (
    <StyledLi
      $rating={feature.rating}
      className={`feature feature--${classItem}`}
    >
      <StyledImg
        className="feature__img"
        width={56}
        height={56}
        src={feature.image}
        alt={feature.feature}
      />
      <StyledHeading>
        <StyledType
          as={"span"}
          size="14px"
          weigth="400"
          $rating={feature.rating}
        >
          {type}
        </StyledType>
        <StyledTitle as={"h3"} size="18px" weigth="700">
          {feature.feature}
        </StyledTitle>
      </StyledHeading>
      <StyleDescription size="18px" weigth="400">
        {feature.description}
      </StyleDescription>
    </StyledLi>
  );
}

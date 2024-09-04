import React, { useState } from "react";
import {
  StyledProductCard,
  StyledImage,
  StyledHeading,
  StyledBookmarkBlock,
  StyledAboutProduct,
  StyledBookmark,
  StyledDescription,
  StyledPrice,
  StyledProp,
} from "./styled";
import { TitleLevel } from "/src/components/ui/heading/heading";
import Text, { typeText } from "/src/components/ui/text/text";

export default function ProductCard({ product }) {
  const headerBookmark = ["Описание", "Характеристики", "Свойства"];
  const [activeBookmark, setActive] = useState(0);
  return (
    <StyledProductCard>
      <StyledImage src={product.image} alt={product.name} />
      <StyledAboutProduct>
        <StyledHeading level={TitleLevel.H4}>{product.name}</StyledHeading>
        <StyledBookmarkBlock>
          {headerBookmark.map((item, index) => {
            if (activeBookmark === index) {
              return (
                <StyledBookmark as="span" active>
                  {item}
                </StyledBookmark>
              );
            }
            return (
              <StyledBookmark key={index} as="span" onClick={() => setActive(index)}>
                {item}
              </StyledBookmark>
            );
          })}
        </StyledBookmarkBlock>
        {activeBookmark === 0 && (
          <StyledDescription as="p">{product.description}</StyledDescription>
        )}

        {activeBookmark === 0 && (
          <StyledPrice as="span">
            {product.price} руб. / {product.packaging}
          </StyledPrice>
        )}
        {activeBookmark === 1 && (
          <StyledDescription as="div">
            {product.specifications.split(";").map((item) => {
              return (
                <Text type={typeText.body14}>
                  <StyledProp as="span" type={typeText.body14b}>
                    {item.split(":")[0]}:
                  </StyledProp>
                  {item.split(":")[1]}
                </Text>
              );
            })}
          </StyledDescription>
        )}
        {activeBookmark === 2 && (
          <StyledDescription as="div">
            {product.usefulness.split(";").map((item) => {
              return (
                <Text type={typeText.body14}>
                  <StyledProp as="span" type={typeText.body14b}>
                    {item.split(":")[0]}:
                  </StyledProp>
                  {item.split(":")[1]}
                </Text>
              );
            })}
          </StyledDescription>
        )}
      </StyledAboutProduct>
    </StyledProductCard>
  );
}

import React from "react";
import Heading, { TitleLevel } from "/src/components/ui/heading/heading";
import Text, { typeText } from "/src/components/ui/text/text";
import StyledSection from "./styles";

export default function About() {
  return (
    <StyledSection className="about__wrapper">
      <Heading level={TitleLevel.H1}>
        {" "}
        Магазин фермерских продуктов с доставкой
      </Heading>
      <Text type={typeText.body18}>
        Все продукты изготавливаются под заказ. Фермеры начинают готовить
        продукты за день до отправки заказа клиентам. Именно поэтому мы
        принимаем заказы заранее и доставляем продукты максимально свежими.
      </Text>
    </StyledSection>
  );
}

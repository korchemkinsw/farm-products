import React from "react";
import { FooterPage } from "./styles";

import Logo from "/src/components/ui/logo/logo";
import Text from "/src/components/ui/text/text";
import { typeText } from "/src/components/ui/text/text";

export default function Footer() {
  return (
    <FooterPage className="footer">
      <Logo />
      <Text as="span" type={typeText.body18}>
        Создано 2021
      </Text>
    </FooterPage>
  );
}

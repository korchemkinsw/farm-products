import styled from "styled-components";

import { TitleLevel } from "/src/components/ui/heading/heading";

const TitleSize = {
  SizeH1: "44px",
  SizeH2: "36px",
  SizeH3: "32px",
  SizeH4: "24px",
};

export const StyledHeading = styled.div`
  margin: 0;
  line-height: 115%;
  font-weight: Bold;
  font-size: ${(props) => {
    let fontSize = "";
    if (props.$level === TitleLevel.H1) {
      fontSize = TitleSize.SizeH1;
    }
    if (props.$level === TitleLevel.H2) {
      fontSize = TitleSize.SizeH2;
    }
    if (props.$level === TitleLevel.H3) {
      fontSize = TitleSize.SizeH3;
    }
    if (props.$level === TitleLevel.H4) {
      fontSize = TitleSize.SizeH4;
    }
    return fontSize;
  }};
`;

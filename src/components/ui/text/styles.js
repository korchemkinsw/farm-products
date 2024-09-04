import styled from "styled-components";
import { typeText } from "./text";

export const StyledText = styled.p`
  margin: 0;
  font-size: ${(props) =>
    props.$type === typeText.body18 || props.$type === typeText.body18b
      ? "18px"
      : "14px"};
  line-height: ${(props) =>
    props.$type === typeText.body18 || props.$type === typeText.body18b
      ? "150%"
      : "130%"};
  font-weight: ${(props) =>
    props.$type === typeText.body14b || props.$type === typeText.body18b
      ? "700"
      : "400"};
`;

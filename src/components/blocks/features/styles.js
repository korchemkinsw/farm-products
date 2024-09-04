import styled from "styled-components";
import { Section, Ul } from "/src/components/styled/index";

export const StyledSection = styled(Section)`
  margin: 0;
  height: 843px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.inner};
`;

export const StyledUl = styled(Ul)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: ${(props) => props.theme.inner};
`;

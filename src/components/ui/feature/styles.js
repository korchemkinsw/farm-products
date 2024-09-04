import styled from "styled-components";
import { Li } from "/src/components/styled/index";
import Text from "/src/components/ui/text/text";

export const StyledLi = styled(Li)`
  width: 500px;
  height: 157px;
  padding: ${(props) => props.theme.inner};
  display: grid;
  grid-template-columns: 56px 1fr;
  grid-template-rows: 56px 1fr;
  gap: ${(props) => props.theme.inner};
  background-color: ${(props) =>
    props.$rating ? props.theme.colorLightGreen : props.theme.colorLightRed};
`;

export const StyledImg = styled.img`
  width: 52px;
  height: 52px;
  padding: 3.01px 0px 3.01px 0px;
  gap: 0px;
  opacity: 0px;
  grid-column: 1/2;
  grid-row: 1/3;
`;

export const StyledHeading = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  dysplay: flex;
  flex-direction: column;
  aglin-items: left;
`;

export const StyledType = styled(Text)`
  margin: 0;
  padding: 5px 10px;
  background-color: ${(props) =>
    props.$rating ? props.theme.colorGreen : props.theme.colorRed};
  color: ${(props) => props.theme.colorWhite};
  font-size: 14px;
  line-height: 21px;
`;

export const StyledTitle = styled(Text)`
  margin: 0;
  font-size: 18px;
  line-height: 27px;
`;

export const StyleDescription = styled.p`
  margin: 0;
  width: 480px;
  grid-column: 1/3;
  grid-row: 2/3;
`;

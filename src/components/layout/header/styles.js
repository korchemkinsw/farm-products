import styled from "styled-components";
import Button from "/src/components/ui/button/button";

export const HeaderPage = styled.header`
  margin: 0;
  width: ${(props) => props.theme.contentWidth};
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.colorWhite};
`;

export const StyledLink = styled(Button)`
  background-color: ${(props) => props.theme.colorWhite};
  color: ${(props) => props.theme.colorMainForText};
  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorWhite};
`;

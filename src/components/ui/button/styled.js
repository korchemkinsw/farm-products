import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: block;
  min-height: 60px;
  min-width: ${(props) => `${props.$minWidth}px` || "100%"};
  background-color: ${(props) => props.theme.colorForButton};
  color: ${(props) => props.theme.colorWhite};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizeDefault};
  font-weight: 700;
  line-height: 58px;
  text-align: center;
  text-decoration: none;
  border: none;

  &:disabled{
    opacity: 0.5;
  }
  &:hover,
  &:active {
    cursor: pointer;
    background-color: ${(props) => props.theme.colorForButtonAction};
  `;

import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const StyledLink = styled(Link)`
display: ${(props) => (useLocation().pathname === props.to ? "none" : "block")};
min-height: 60px;
min-width: ${(props) => `${props.$minWidth}px` || "100%"};
width: 260px;
background-color: ${(props) =>
  props.to === "/order" && props.theme.colorForButton};
color: ${(props) => props.to === "/order" && props.theme.colorWhite};
color: ${(props) => props.to === "/" && props.theme.colorMainForText};
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
  background-color: ${(props) =>
    props.to === "/order" && props.theme.colorForButtonAction};

`;

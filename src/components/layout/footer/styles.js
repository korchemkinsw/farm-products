import styled from "styled-components";

export const FooterPage = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin 0;
  padding 0;
  width: ${(props) => props.theme.contentWidth};
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  height: 80px;
  border-top: 1px solid rgba(0, 0, 0, 10%);
  background-color:  ${(props) => props.theme.colorWhite};
`;

import styled from "styled-components";

const Section = styled.section`
  margin: 0px;
  width: ${(props) => props.theme.contentWidth};
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  display: flex;
  flex-direction: column;
`;

export default Section;

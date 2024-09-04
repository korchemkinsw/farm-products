import styled from "styled-components";
import Heading from "/src/components/ui/heading/heading";
import Text from "/src/components/ui/text/text";

export const StyledProductCard = styled.article`
  margin: 0;
  padding: ${(props) => props.theme.inner};
  width: 687px;
  height: 248px;
  display: flex;
  gap: ${(props) => props.theme.inner};
`;

export const StyledImage = styled.img`
  width: 248px;
  height: 248px;
`;

export const StyledAboutProduct = styled.div`
  width: auto;
  height: 248px;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.inner};
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
`;

export const StyledHeading = styled(Heading)`
  width: 271px;
  height: 31px;
`;

export const StyledBookmarkBlock = styled.div`
  height: 37px;
  display: flex;
  gap: 10px;
`;

export const StyledBookmark = styled(Text)`
  padding: 8px 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: ${(props) =>
    props.active ? "rgba(136, 170, 77, 1)" : "rgba(246, 246, 246, 1)"};
  color: ${(props) =>
    props.active ? props.theme.colorWhite : props.theme.MainForText};
  &:hover {
    cursor: pointer;
  }
`;

export const StyledDescription = styled(Text)`
  margin: 0;
  padding: 0;
  height: 137px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledPrice = styled(Text)`
  margin-right: auto;
  height: 29px;
  padding: 4px 8px;
  background-color: rgba(216, 236, 254, 1);
`;

export const StyledProp = styled(Text)`
  font-weight: 700;
`;

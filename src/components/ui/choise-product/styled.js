import styled from "styled-components";
import Text from "/src/components/ui/text/text";

export const FormText = styled(Text)``;

export const StyledLabel = styled(Text)`
  display: flex;
  justify-content: space-between;
  line-height: 56px;
  input{
    visibility: hidden;
  }
  }
`;

export const StyledCheckbox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  width: 24px;
  height: 24px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  order: 3;
  &.checked {
    background: rgba(252, 155, 39, 1);
  }
`;

import styled from "styled-components";

const Fieldset = styled.fieldset`
  border: solid 1px rgba(0, 0, 0, 0.1);
  padding: ${(props) => props.theme.inner};
  background-color: ${(props) => props.theme.colorWhite};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export default Fieldset;

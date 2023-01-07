import styled from "styled-components";

const CheckBox = () => {
  return (
    <CheckBoxWrapper>
      <CheckBoxInput type="checkbox"></CheckBoxInput>
    </CheckBoxWrapper>
  );
};
export default CheckBox;

const CheckBoxWrapper = styled.div`
  display: flex;
  margin-right: 15px;
  align-items: center;
  justify-content: center;
`;
const CheckBoxInput = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 10px;
`;

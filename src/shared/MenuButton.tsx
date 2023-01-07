import styled from "styled-components";

export default function MenuButton() {
  return (
    <>
      <Button />;
    </>
  );
}

const Button = styled.button`
  width: 238.78px;
  height: 42px;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 10px; 14px;
  font-size: 15px;
  border-radius: 8px;
  letter-spacing: -0.2px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(222, 226, 230);
  color: rgb(37, 38 ,42);
  cursor: pointer;
`;

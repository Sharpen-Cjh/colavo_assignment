import React from "react";
import styled from "styled-components";

import PlusButtonIcon from "../shared/PlusButtonIcon";

const DiscountMenuButton: React.FC<{ onShowDiscountMenu: () => void }> = ({
  onShowDiscountMenu,
}) => {
  return (
    <Button onClick={onShowDiscountMenu}>
      <PlusButtonIcon width={20} height={20} fill={"rgb(255, 118, 171)"} />
      <ButtonName>할인 메뉴</ButtonName>
    </Button>
  );
};

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

const ButtonName = styled.div`
  margin-left: 15px;
`;

export default DiscountMenuButton;

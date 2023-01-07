import { useState, useEffect } from "react";
import styled from "styled-components";

import Modal from "../shared/Modal";
import DiscountCard from "./DiscountCard";
import CloseIcon from "../shared/CloseIcon";
import { Discount } from "../models/models";

const DiscountMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [discountList, setDiscountList] = useState<Discount[]>([]);

  useEffect(() => {
    const url =
      "https://us-central1-colavolab.cloudfunctions.net/requestAssignmentCalculatorData";
    const fetchData = async () => {
      try {
        const discountArray = [];
        const response = await fetch(url);
        const { discounts } = await response.json();

        for (const discount in discounts) {
          discountArray.push(discounts[discount]);
        }

        setDiscountList(discountArray);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Modal onClose={onClose}>
      <DiscountMenuWrapper>
        <DiscountMenuHeader>
          <DiscountMenuTitle>할인 메뉴</DiscountMenuTitle>
          <CloseIcon onClose={onClose} />
        </DiscountMenuHeader>
        <DiscountMenuBody>
          {discountList.map((discountItem) => (
            <DiscountCard key={discountItem.name} discountItem={discountItem} />
          ))}
        </DiscountMenuBody>
        <DiscountMenuFooter>
          <DiscountMenuTotalAmountWrapper>
            <DiscountTotalAmountText>합계</DiscountTotalAmountText>
            <DiscountTotalAmount>1,000원</DiscountTotalAmount>
          </DiscountMenuTotalAmountWrapper>
          <NextStepButton>다음</NextStepButton>
        </DiscountMenuFooter>
      </DiscountMenuWrapper>
    </Modal>
  );
};

const DiscountMenuWrapper = styled.div`
  width: 538px;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 8px 0px;
  background-color: rgb(255, 255, 255);
  padding: 35px;
`;

const DiscountMenuHeader = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const DiscountMenuTitle = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.3px;
  color: rgb(37, 38, 42);
  text-align: center;
`;

const DiscountMenuBody = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: rgb(248, 249, 250);
  padding: 10px;
  margin-bottom: 20px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const DiscountMenuFooter = styled.div`
  display: flex;
  flex-direction: column;
`;
const DiscountMenuTotalAmountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DiscountTotalAmountText = styled.div`
  font-weight: 700;
  font-size: 18px;
`;
const DiscountTotalAmount = styled.div`
  font-weight: 700;
  font-size: 18px;
`;

const NextStepButton = styled.button`
  width: 100%;
  margin-top: 18px;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.3px;
  border-radius: 8px;
  border: none;
  background-color: rgb(255, 118, 171);
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

export default DiscountMenu;

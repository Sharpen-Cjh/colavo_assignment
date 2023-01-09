import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { Discount } from "../../models/models";
import {
  addDiscountToCart,
  discount,
  calculatorTotalAmount,
} from "../../store/cartSlice";
import DiscountMenuCard from "./DiscountMenuCard";
import CloseIcon from "../../shared/CloseIcon";
import Modal from "../../shared/Modal";

const DiscountMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [discountList, setDiscountList] = useState<Discount[]>([]);
  const dispatch = useDispatch();

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
          <CloseIcon width={24} onClose={onClose} />
        </DiscountMenuHeader>
        <DiscountMenuBody>
          {discountList.map((discountItem) => (
            <DiscountMenuCard
              key={discountItem.name}
              discountItem={discountItem}
              onClick={() => {
                dispatch(addDiscountToCart(discountItem));
              }}
            />
          ))}
        </DiscountMenuBody>
        <DiscountMenuFooter>
          <DiscountMenuTotalAmountWrapper></DiscountMenuTotalAmountWrapper>
          <NextStepButton
            onClick={() => {
              dispatch(discount());
              dispatch(calculatorTotalAmount());
              onClose();
            }}
          >
            할 인 적 용
          </NextStepButton>
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

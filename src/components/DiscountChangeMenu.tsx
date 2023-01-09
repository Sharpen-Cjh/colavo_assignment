import { useDispatch } from "react-redux";
import styled from "styled-components";

import { DiscountItem } from "../store/types";

import Modal from "../shared/Modal";
import CloseIcon from "../shared/CloseIcon";
import { discountChange, calculatorTotalAmount } from "../store/cartSlice";

type DiscountChangeMenuProps = {
  onClose: () => void;
  discountItem: DiscountItem;
};

const DiscountChangeMenu = ({
  onClose,
  discountItem,
}: DiscountChangeMenuProps) => {
  const dispatch = useDispatch();

  return (
    <Modal onClose={onClose}>
      <DiscountChangeMenuWrapper>
        <DiscountChangeMenuHeader>
          <ServiceMenuTitle>시술 메뉴</ServiceMenuTitle>
          <CloseIcon width={24} onClose={onClose} />
        </DiscountChangeMenuHeader>
        <DiscountChangeMenuBody>
          {discountItem.serviceItems.map((item) => (
            <CardWrapper key={item.name}>
              <CartItem>
                <CartItemName>{item.name}</CartItemName>
                <CartItemPrice>{item.price}</CartItemPrice>
              </CartItem>
              <CheckBoxInput
                type="checkbox"
                onChange={() => {
                  dispatch(discountChange([discountItem.name, item.name]));
                }}
                checked={discountItem.serviceItems.includes(item)}
              />
            </CardWrapper>
          ))}
        </DiscountChangeMenuBody>
        <NextStepButton
          onClick={() => {
            dispatch(calculatorTotalAmount());
            onClose();
          }}
        >
          다 음
        </NextStepButton>
      </DiscountChangeMenuWrapper>
    </Modal>
  );
};

const DiscountChangeMenuWrapper = styled.div`
  width: 538px;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 8px 0px;
  background-color: rgb(255, 255, 255);
  padding: 35px;
`;

const DiscountChangeMenuHeader = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const ServiceMenuTitle = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.3px;
  color: rgb(37, 38, 42);
  text-align: center;
`;

const DiscountChangeMenuBody = styled.div`
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

const NextStepButton = styled.button`
  width: 100%;
  margin-top: 18px;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.3px;
  border-radius: 8px;
  border: none;
  background-color: rgb(93, 149, 255);
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

const CardWrapper = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 8px;
  background-color: rgb(255, 255, 255);
  margin: 15px;
`;

const CartItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CartItemName = styled.div`
  font-size: 15px;
  font-weight: bold;
  word-break: break-word;
  letter-spacing: -0.2px;
`;

const CartItemPrice = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const CheckBoxInput = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 10px;
`;
export default DiscountChangeMenu;

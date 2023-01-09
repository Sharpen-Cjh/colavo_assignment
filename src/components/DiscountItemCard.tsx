import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { calculatorTotalAmount, removeDiscountItem } from "../store/cartSlice";
import { DiscountItem } from "../store/types";

import CloseIcon from "../shared/CloseIcon";
import DiscountChangeMenu from "./DiscountChangeMenu";

type DiscountItemCardProp = {
  discountItem: DiscountItem;
};

const DiscountItemCard = ({ discountItem }: DiscountItemCardProp) => {
  const [discountChangeMenuIsShown, setDiscountChangeMenuIsShown] = useState(
    false
  );
  const dispatch = useDispatch();

  const ShowDiscountChangeMenu = () => {
    setDiscountChangeMenuIsShown(true);
  };

  const HideDiscountChangeMenu = () => {
    setDiscountChangeMenuIsShown(false);
  };

  return (
    <CardWrapper>
      {discountChangeMenuIsShown && (
        <DiscountChangeMenu
          discountItem={discountItem}
          onClose={HideDiscountChangeMenu}
        />
      )}
      <CartItem>
        <CartItemName>{discountItem.name}</CartItemName>
        <DiscountServiceWrapper>
          {discountItem.serviceItems?.map((service) => (
            <DiscountServiceName key={service.name}>
              {service.name}
            </DiscountServiceName>
          ))}
        </DiscountServiceWrapper>
        <DiscountAmount>
          -{discountItem.discountAmount?.toLocaleString("ko-KR")}원
          <DiscountRate>({Math.floor(discountItem.rate * 100)}%)</DiscountRate>
        </DiscountAmount>
      </CartItem>
      <CardRightSide>
        <DiscountChangeButton onClick={ShowDiscountChangeMenu}>
          수 정
        </DiscountChangeButton>
        <CloseIcon
          width={13}
          onClick={() => {
            dispatch(removeDiscountItem(discountItem));
            dispatch(calculatorTotalAmount());
          }}
        />
      </CardRightSide>
    </CardWrapper>
  );
};

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
`;

const CardRightSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const DiscountRate = styled.div`
  font-size: 14px;
  font-weight: bold;
`;
const DiscountServiceWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const DiscountServiceName = styled.div`
  font-size: 13px;
  font-weight: 500;
  margin-left: 3px;
  color: rgb(114, 121, 128);
  text-overflow: ellipsis;
`;

const DiscountAmount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  color: rgb(255, 118, 171);
`;

const DiscountChangeButton = styled.div`
  display: flex;
  width: 40px;
  height: 20px;
  justify-content: center;
  align-items: center;

  background-color: rgb(241, 244, 246);
  border-radius: 5px;
  margin-right: 20px;
  font-size: 13px;
  cursor: pointer;
`;

export default DiscountItemCard;

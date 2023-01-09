import { useDispatch } from "react-redux";
import styled from "styled-components";

import { ServiceItem } from "../../store/types";
import {
  addQuantity,
  removeQuantity,
  removeServiceItem,
  discount,
  addNameToCart,
  calculatorTotalAmount,
} from "../../store/cartSlice";
import CloseIcon from "../../shared/CloseIcon";

type ServiceItemCardProp = {
  serviceItem: ServiceItem;
};

const CartServiceCard = ({ serviceItem }: ServiceItemCardProp) => {
  const dispatch = useDispatch();

  return (
    <CardWrapper>
      <CartItem>
        <CartItemName>{serviceItem.name}</CartItemName>
        <CartItemPrice>
          {serviceItem.price.toLocaleString("ko-KR")}원
        </CartItemPrice>
      </CartItem>
      <CardRightSide>
        <ItemQuantityWrapper>
          <RemoveButton
            onClick={() => {
              dispatch(removeQuantity(serviceItem));
              dispatch(calculatorTotalAmount());
            }}
          >
            -
          </RemoveButton>
          <QuantityDiv>{serviceItem.count}</QuantityDiv>
          <AddButton
            onClick={() => {
              dispatch(addQuantity(serviceItem));
              dispatch(calculatorTotalAmount());
            }}
          >
            +
          </AddButton>
        </ItemQuantityWrapper>
        <CloseIcon
          width={13}
          onClick={() => {
            dispatch(addNameToCart(serviceItem));
            dispatch(removeServiceItem(serviceItem));
            dispatch(discount());
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
  letter-spacing: -0.2px;
`;

const CartItemPrice = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const ItemQuantityWrapper = styled.div`
  width: 120px;
  display: flex;
  flex-direction: row;
  padding: 0;
`;

const RemoveButton = styled.button`
  width: 20%;
  border: none;
  border-radius: 5px;
  background-color: rgb(255, 118, 171);
  cursor: pointer;
`;

const QuantityDiv = styled.div`
  width: 40%;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
`;

const AddButton = styled.button`
  width: 20%;
  border: none;
  border-radius: 5px;
  background-color: rgb(93, 149, 255);
  cursor: pointer;
`;

const CardRightSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default CartServiceCard;

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Discount } from "../models/models";

import { addNameToCart } from "../store/cartSlice";
import { RootState } from "../store/store";

type DiscountProp = {
  discountItem: Discount;
  onClick: () => void;
};

const DiscountCard = ({ discountItem, onClick }: DiscountProp) => {
  const { cart } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  return (
    <CardWrapper>
      <DiscountItem>
        <DiscountName>{discountItem.name}</DiscountName>
        <DiscountRate>{Math.floor(discountItem.rate * 100)}%</DiscountRate>
      </DiscountItem>
      <CheckBoxInput
        onChange={() => {
          dispatch(addNameToCart(discountItem));
        }}
        type="checkbox"
        name={discountItem.name}
        onClick={onClick}
        checked={cart.includes(discountItem.name)}
      />
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
`;
const DiscountItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const DiscountName = styled.div`
  font-size: 15px;
  font-weight: bold;
  word-break: break-word;
  letter-spacing: -0.2px;
`;
const DiscountRate = styled.div`
  font-size: 15px;
  font-weight: bold;
`;
const CheckBoxInput = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 10px;
`;

export default DiscountCard;

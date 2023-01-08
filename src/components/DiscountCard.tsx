import styled from "styled-components";

import { Discount } from "../models/models";

type DiscountProp = {
  discountItem: Discount;
};

const DiscountCard = ({ discountItem }: DiscountProp) => {
  return (
    <CardWrapper>
      <DiscountItem>
        <DiscountName>{discountItem.name}</DiscountName>
        <DiscountRate>{discountItem.rate}</DiscountRate>
      </DiscountItem>
      <CheckBoxInput type="checkbox" name={discountItem.name} />
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

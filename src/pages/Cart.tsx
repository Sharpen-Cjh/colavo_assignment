import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import styled from "styled-components";
import DiscountMenu from "../components/DiscountMenu";

import DiscountMenuButton from "../components/DiscountMenuButton";
import ServiceMenu from "../components/ServiceMenu";
import ServiceMenuButton from "../components/ServiceMenuButton";

const Cart = () => {
  const [serviceIsShown, setServiceIsShown] = useState(false);
  const [discountIsShown, setDiscountIsShown] = useState(false);
  const cart = useSelector((state: RootState) => state.cart);

  const ShowServiceMenu = () => {
    setServiceIsShown(true);
  };

  const HideServiceMenu = () => {
    setServiceIsShown(false);
  };

  const ShowDiscountMenu = () => {
    setDiscountIsShown(true);
  };

  const HideDiscountMenu = () => {
    setDiscountIsShown(false);
  };

  return (
    <CartPage>
      {serviceIsShown && <ServiceMenu onClose={HideServiceMenu} />}
      {discountIsShown && <DiscountMenu onClose={HideDiscountMenu} />}
      <CartWrapper>
        <CartHeader>
          <ButtonWrapper>
            <ServiceMenuButton onShowServiceMenu={ShowServiceMenu} />
            <DiscountMenuButton onShowDiscountMenu={ShowDiscountMenu} />
          </ButtonWrapper>
        </CartHeader>
        <CartBody></CartBody>
        <CartFooter>
          <TotalAmountText>합계</TotalAmountText>
          <TotalAmount>1,000원</TotalAmount>
        </CartFooter>
      </CartWrapper>
    </CartPage>
  );
};

export default Cart;

const CartPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: rgb(248, 249, 250);
`;

const CartWrapper = styled.div`
  width: 538px;
  height: 500px;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 8px 0px;
  background-color: rgb(255, 255, 255);
  padding: 35px;
`;

const CartHeader = styled.div``;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const CartBody = styled.div`
  border-radius: 10px;
  background-color: rgb(248, 249, 250);
  min-height: 200px;
  padding: 18px;
  margin-bottom: 200px;
`;

const CartFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TotalAmountText = styled.div`
  font-weight: 700;
  font-size: 18px;
`;

const TotalAmount = styled.div`
  font-weight: 700;
  font-size: 18px;
`;

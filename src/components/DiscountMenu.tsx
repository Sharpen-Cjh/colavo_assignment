import styled from "styled-components";

import { ReactComponent as CloseIcon } from "../assets/Close.svg";

export default function DiscountMenu() {
  return (
    <DiscountMenuPage>
      <DiscountMenuWrapper>
        <DiscountMenuHeader>
          <DiscountMenuTitle>할인 메뉴</DiscountMenuTitle>
          <CloseIcon />
        </DiscountMenuHeader>
        <DiscountMenuBody></DiscountMenuBody>
        <DiscountMenuFooter>
          <DiscountMenuTotalAmountWrapper>
            <DiscountTotalAmountText>합계</DiscountTotalAmountText>
            <DiscountTotalAmount>1,000원</DiscountTotalAmount>
          </DiscountMenuTotalAmountWrapper>
          <NextStepButton>다음</NextStepButton>
        </DiscountMenuFooter>
      </DiscountMenuWrapper>
    </DiscountMenuPage>
  );
}

const DiscountMenuPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: rgb(248, 249, 250);
`;

const DiscountMenuWrapper = styled.div`
  width: 538px;
  height: 742px;
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
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.3px;
  color: rgb(37, 38, 42);
  width: 100%;
  text-align: center;
`;

const DiscountMenuBody = styled.div`
  border-radius: 10px;
  background-color: rgb(248, 249, 250);
  min-height: 300px;
  padding: 18px;
  margin-bottom: 250px;
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
  margin-top: 18px;
  width: 100%;
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

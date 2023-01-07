import styled from "styled-components";

import { ReactComponent as CloseIcon } from "../assets/Close.svg";
import Card from "./Card";

export default function ServiceMenu() {
  return (
    <ServiceMenuPage>
      <ServiceMenuWrapper>
        <ServiceMenuHeader>
          <ServiceMenuTitle>시술 메뉴</ServiceMenuTitle>
          <CloseIcon />
        </ServiceMenuHeader>
        <ServiceMenuBody>
          <Card />
        </ServiceMenuBody>
        <ServiceMenuFooter>
          <ServiceMenuTotalAmountWrapper>
            <ServiceTotalAmountText>합계</ServiceTotalAmountText>
            <ServiceTotalAmount>1,000원</ServiceTotalAmount>
          </ServiceMenuTotalAmountWrapper>
          <NextStepButton>다음</NextStepButton>
        </ServiceMenuFooter>
      </ServiceMenuWrapper>
    </ServiceMenuPage>
  );
}

const ServiceMenuPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: rgb(248, 249, 250);
`;

const ServiceMenuWrapper = styled.div`
  width: 538px;
  height: 742px;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 8px 0px;
  background-color: rgb(255, 255, 255);
  padding: 35px;
`;

const ServiceMenuHeader = styled.div`
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

const ServiceMenuBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: rgb(248, 249, 250);
  min-height: 300px;
  margin-bottom: 250px;
  padding: 20px;
`;

const ServiceMenuFooter = styled.div`
  display: flex;
  flex-direction: column;
`;
const ServiceMenuTotalAmountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ServiceTotalAmountText = styled.div`
  font-weight: 700;
  font-size: 18px;
`;
const ServiceTotalAmount = styled.div`
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
  background-color: rgb(93, 149, 255);
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

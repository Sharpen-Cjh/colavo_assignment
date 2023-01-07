import styled from "styled-components";

import CheckBox from "./CheckBox";

const Card = () => {
  return (
    <CardWrapper>
      <ServiceItem>
        <ServiceName>샤기컷</ServiceName>
        <ServicePrice>3,000원</ServicePrice>
      </ServiceItem>
      <CheckBox />
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  padding: 10px;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 8px;
  background-color: rgb(255, 255, 255);
`;
const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ServiceName = styled.div`
  font-size: 15px;
  font-weight: bold;
  word-break: break-word;
  letter-spacing: -0.2px;
`;
const ServicePrice = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

export default Card;

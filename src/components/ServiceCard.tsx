import styled from "styled-components";

import { Service } from "../models/models";
import CheckBox from "./CheckBox";

type ServiceProp = {
  service: Service;
};

const ServiceCard = ({ service }: ServiceProp) => {
  return (
    <CardWrapper>
      <ServiceItem>
        <ServiceName>{service.name}</ServiceName>
        <ServicePrice>{service.price}</ServicePrice>
      </ServiceItem>
      <CheckBox />
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
  margin: 15px;
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

export default ServiceCard;

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { RootState } from "../../store/store";
import { addToCart, addNameToCart } from "../../store/cartSlice";
import { Service } from "../../models/models";

type ServiceProp = {
  service: Service;
};

const ServiceCard = ({ service }: ServiceProp) => {
  const { cart } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  return (
    <CardWrapper>
      <ServiceItemWrapper>
        <ServiceName>{service.name}</ServiceName>
        <ServicePrice>{service.price.toLocaleString("ko-KR")}원</ServicePrice>
      </ServiceItemWrapper>
      <CheckBoxInput
        onChange={() => {
          dispatch(addToCart(service));
          dispatch(addNameToCart(service));
        }}
        type="checkbox"
        name={service.name}
        checked={cart.includes(service.name)}
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
  margin: 15px;
`;
const ServiceItemWrapper = styled.div`
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

const CheckBoxInput = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 10px;
`;

export default ServiceCard;

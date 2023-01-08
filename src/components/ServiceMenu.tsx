import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import styled from "styled-components";

import ServiceCard from "./ServiceCard";
import Modal from "../shared/Modal";
import { Service } from "../models/models";
import CloseIcon from "../shared/CloseIcon";
import { RootState } from "../store/store";

const ServiceMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [serviceList, setServiceList] = useState<Service[]>([]);
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  console.log(cart);

  useEffect(() => {
    const url =
      "https://us-central1-colavolab.cloudfunctions.net/requestAssignmentCalculatorData";
    const fetchData = async () => {
      try {
        const itemsArray = [];
        const response = await fetch(url);
        const { items } = await response.json();

        for (const item in items) {
          itemsArray.push(items[item]);
        }

        setServiceList(itemsArray);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const onCheckedItem = (checked: boolean, item: string) => {
    if (checked) {
      setCheckedList([...checkedList, item]);
    } else {
      setCheckedList(checkedList.filter((element) => element !== item));
    }
  };

  return (
    <Modal onClose={onClose}>
      <ServiceMenuWrapper>
        <ServiceMenuHeader>
          <ServiceMenuTitle>시술 메뉴</ServiceMenuTitle>
          <CloseIcon onClose={onClose} />
        </ServiceMenuHeader>
        <ServiceMenuBody>
          {serviceList.map((service) => (
            <ServiceCard
              key={service.name}
              service={service}
              onClick={() => {
                dispatch(addToCart(service));
              }}
              onCheckItem={onCheckedItem}
            />
          ))}
        </ServiceMenuBody>
        <ServiceMenuFooter>
          <ServiceMenuTotalAmountWrapper>
            <ServiceTotalAmountText>합계</ServiceTotalAmountText>
            <ServiceTotalAmount>1,000원</ServiceTotalAmount>
          </ServiceMenuTotalAmountWrapper>
          <NextStepButton
            onClick={() => {
              onClose();
            }}
          >
            저 장
          </NextStepButton>
        </ServiceMenuFooter>
      </ServiceMenuWrapper>
    </Modal>
  );
};

const ServiceMenuWrapper = styled.div`
  width: 538px;
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
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: rgb(248, 249, 250);
  padding: 10px;
  margin-bottom: 20px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
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
  width: 100%;
  margin-top: 18px;
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

export default ServiceMenu;

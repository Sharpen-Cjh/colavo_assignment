interface Item {
  name: string;
}

export interface ServiceItem extends Item {
  count: number;
  price: number;
}

export interface DiscountItem extends Item {
  rate: number;
  serviceItems: ServiceItem[];
  discountAmount: number;
}

export interface CartState {
  cart: string[];
  serviceItems: ServiceItem[];
  discountItems: DiscountItem[];
  totalAmount: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface Sell {
  id: number;
  source: string;
  total_price: number;
  date: string;
}

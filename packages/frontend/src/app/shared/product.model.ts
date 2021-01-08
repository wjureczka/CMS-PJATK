export interface Product {
  id: number;
  description: string;
  longDescription: string;
  price: number;
  category: {
    categoryId: number;
    categoryType: string;
  };
  properties: {
    id: number;
    name: string;
    value: string;
  }[];
}

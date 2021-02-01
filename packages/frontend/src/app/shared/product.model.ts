export interface Product {
  id: number;
  description: string;
  price: number;
  category: {
    categoryId: number;
    categoryType: string;
  };
  producer: {
    producerId: number;
    producerName: string;
  };
  properties: {
    id: number;
    name: string;
    value: string;
  }[];
  translations?: {
    id?: number;
    lang: string;
    value: string;
  }[];
}

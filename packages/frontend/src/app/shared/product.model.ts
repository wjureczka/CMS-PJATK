import {ProductCategoryType} from './product-category-type.enum';

export interface Product {
  id: number;
  description: string;
  longDescription: string;
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
  translation?: {
    value: string;
  };
}

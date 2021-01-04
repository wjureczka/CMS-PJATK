import {CategoryType} from './category-type.enum';

export interface ListingProduct {
  id: number;
  category: Category;
  description: string;
  price: number;
}

export interface Category {
  categoryId: number;
  categoryType: string;
}

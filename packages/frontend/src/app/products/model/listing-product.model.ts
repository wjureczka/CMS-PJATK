import {CategoryType} from './category-type.enum';

export interface ListingProduct {
  id: number;
  category: Category;
  description: string;
  price: number;
}

interface Category {
  categoryId: number;
  categoryType: string;
}

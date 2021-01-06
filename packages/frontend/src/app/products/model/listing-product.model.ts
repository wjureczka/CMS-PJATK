import {CategoryType} from '../../shared/category-type.enum';

export interface ListingProduct {
  id: number;
  category: Category;
  description: string;
  longDescription: string;
  price: number;
  producer: any;
}

export interface Category {
  categoryId: number;
  categoryType: string;
}

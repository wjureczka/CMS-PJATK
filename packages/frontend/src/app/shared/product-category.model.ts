import {ProductCategoryType} from './product-category-type.enum';

export interface ProductCategory {
  categoryId: ProductCategoryType;
  categoryType: string;
}

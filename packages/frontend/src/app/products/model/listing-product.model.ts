import {ProductCategory} from '../../shared/product-category.model';

export interface ListingProduct {
  id: number;
  category: ProductCategory;
  description: string;
  longDescription: string;
  price: number;
  producer: {
    producerId: number;
    producerName: string;
  };
}

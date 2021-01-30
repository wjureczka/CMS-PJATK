export interface Page<T> {
  number: number;
  size: number;
  totalPages: number;
  totalElements: number;
  first: boolean;
  last: boolean;
  content: T[];
}

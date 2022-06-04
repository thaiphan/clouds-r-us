export type GetProductsResponse = Array<{
  productId: string;
  name: string;
  description: string;
  unitPrice: number;
  maximumQuantity: number | null;
}>;

export interface Product {
  productId: string;
  name: string;
  description: string;
  unitPrice: number;
  maximumQuantity: number | null;
  image: string;
}

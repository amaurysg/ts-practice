import { Product } from "./product.model";


const products: Product[] = []

export const addProduct = (data: Product) => {

  return products.push(data)


};

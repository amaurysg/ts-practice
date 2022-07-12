import { Product } from "./products/product.model";
import { addProduct } from "./products/product.service";

(() => {
  //with objects
  const login = (data: { userName: string; password: string }) => {
    console.log(data.userName, data.password);
  };



  const data = { userName: 'ama', password: 'jsjsjs' };
  login(data);





const rta = addProduct(data)
console.log(rta)

})();

import { instance } from "./instance";

export const getsearchProduct = (key) => {
  return instance.get(`/products/search?q=${key}`);
};

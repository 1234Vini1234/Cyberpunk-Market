import { product } from "../types/product";

export async function getProducts(): Promise<product[]> {
  const res = await fetch("http://localhost:4000/api/products",); 
    if (!res.ok) throw new Error("erro ao buscar produtos");
      return res.json();
}
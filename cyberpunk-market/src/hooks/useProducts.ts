"use client";
import { useEffect, useState } from "react";
import { product } from "../types/product";
import { getProducts } from "../servicees/Productservice";

export function useProducts() {
  const [products, setProducts] = useState<product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        getProducts()
        .then((data) => setProducts(data))
        .finally(() => setLoading(false))
    }, []);

  return { products, loading, error };
}
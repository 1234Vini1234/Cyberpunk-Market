"use client";

import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

export default function ListProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("http://localhost:4000/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <section className="space-y-12">

      {/* TÍTULO */}
      <h1 className="text-3xl font-bold tracking-widest text-green-400">
        Produtos Disponíveis
      </h1>

      {/* LOADING */}
      {loading && (
        <p className="text-slate-400 animate-pulse">
          Carregando produtos...
        </p>
      )}

      {/* EMPTY STATE */}
      {!loading && products.length === 0 && (
        <p className="text-slate-500">
          Nenhum produto disponível no momento.
        </p>
      )}

      {/* GRID DE PRODUTOS */}
      {!loading && products.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="
                bg-black/60
                border border-green-500/20
                rounded-xl
                p-6
                hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]
                transition
              "
            >
              <h2 className="text-xl font-bold text-green-400">
                {product.name}
              </h2>

              <p className="text-sm text-slate-400 mt-3">
                {product.description}
              </p>

              <p className="mt-6 text-2xl font-bold text-purple-400">
                ${product.price.toFixed(2)}
              </p>

              <button
                className="
                  mt-6
                  w-full
                  py-2
                  border
                  border-purple-500
                  text-purple-400
                  rounded-md
                  uppercase
                  tracking-wider
                  hover:bg-purple-500/10
                  transition
                "
              >
                Comprar
              </button>
            </div>
          ))}
        </div>
      )}

    </section>
  );
}

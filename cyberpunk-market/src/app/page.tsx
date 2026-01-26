"use client";

import ProductList from "@/src/components/product/ProductList";

export default function HomePage() {
  return (
    <section className="space-y-24">

      <div className="text-center space-y-6 py-20">
        <h1 className="text-5xl font-extrabold tracking-widest text-green-400 drop-shadow-[0_0_25px_rgba(34,197,94,0.25)]">
          Cyberpunk Market
        </h1>

        <p className="text-slate-400 max-w-xl mx-auto">
          Equipamentos do amanhã. Tecnologia para quem vive à frente do tempo.
        </p>

        <button className="mt-6 px-8 py-3 border border-purple-500 text-purple-400 rounded-md hover:bg-purple-500/10 transition uppercase tracking-wider">
          Destaques
        </button>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
      <div className="space-y-10">
        <h2 className="text-3xl font-bold tracking-widest text-purple-400">
          Produtos em Destaque
        </h2>

        <ProductList />
      </div>

    </section>
  );
}

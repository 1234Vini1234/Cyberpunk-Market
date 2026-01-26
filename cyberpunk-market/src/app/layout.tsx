import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="backdrop-blur bg-black/60 border-b border-green-500/20 px-10 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-widest">
            <span className="text-green-400">Cyberpunk</span>{" "}
            <span className="text-purple-500">Market</span>
          </h1>

          <nav className="space-x-8 text-sm uppercase tracking-widest text-slate-300">
            <Link href="/create-product" className="hover:text-green-400 transition">
              Cadastrar
            </Link>
            <Link href="/products" className="hover:text-purple-400 transition">
              Produtos
            </Link>
          </nav>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-16">
          {children}
        </main>

        <footer className="border-t border-white/5 text-center py-6 text-sm text-slate-500">
          © 2026 Cyberpunk Market
        </footer>
      </body>
    </html>
  );
}

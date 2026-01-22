import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-green-400 font-mono">
        <header className="bg-gray-900 p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Cyberpunk Market</h1>
          <nav className="space-x-4">
            <Link href="/create-product" className="hover:text-green-300">Cadastrar</Link>
            <Link href="/products" className="hover:text-green-300">Produtos</Link>
          </nav>
        </header>
        <main className="p-6">{children}</main>
        <footer className="bg-gray-900 p-4 text-center text-sm text-gray-400">
          © 2026 Cyberpunk Market
        </footer>
      </body>
    </html>
  );
}

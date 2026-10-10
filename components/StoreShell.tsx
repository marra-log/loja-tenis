import Link from "next/link";
import type { ReactNode } from "react";

export function StoreShell({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="topbar">Pix com desconto · troca em 7 dias · envio em 24h</div>
      <header className="header">
        <div className="wrap header-row">
          <Link className="logo" href="/">ATELIER</Link>
          <nav className="nav">
            <Link href="/catalogo">Catálogo</Link>
            <Link href="/catalogo?genero=masculino">Masculino</Link>
            <Link href="/catalogo?genero=feminino">Feminino</Link>
            <Link href="/descontos">Descontos</Link>
            <Link href="/politicas">Políticas</Link>
          </nav>
          <div className="search">Buscar modelo ou SKU</div>
          <Link className="cart-link" href="/carrinho">Carrinho (0)</Link>
        </div>
      </header>
      {children}
      <footer className="footer">
        <div className="wrap footer-links">
          <span>ATELIER · tênis primeira linha</span>
          <Link href="/politicas/trocas">Trocas</Link>
          <Link href="/politicas/envio">Envio</Link>
          <Link href="/politicas/privacidade">Privacidade</Link>
          <Link href="/politicas/termos">Termos</Link>
        </div>
      </footer>
    </>
  );
}

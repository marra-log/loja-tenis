"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useCart } from "./Providers";

export function StoreShell({ children }: { children: ReactNode }) {
  const cart = useCart();
  return (
    <>
      <div className="topbar">Pix com desconto · troca em 7 dias · envio em 24h</div>
      <header className="header">
        <div className="wrap header-row">
          <Link className="logo" href="/">ATELIER</Link>
          <nav className="nav">
            <Link href="/catalogo">Catálogo</Link>
            <Link href="/estilo">Estilo</Link>
            <Link href="/marca">Marca</Link>
            <Link href="/lancamentos">Lançamentos</Link>
            <Link href="/promocoes">Promoções</Link>
            <Link href="/blog">Blog</Link>
          </nav>
          <Link className="cart-link" href="/carrinho">Carrinho ({cart.count})</Link>
        </div>
      </header>
      {children}
      <footer className="footer">
        <div className="wrap footer-links">
          <span>ATELIER · tênis primeira linha</span>
          <Link href="/mais-vendidos">Mais vendidos</Link>
          <Link href="/politicas/trocas">Trocas</Link>
          <Link href="/politicas/envio">Envio</Link>
          <Link href="/politicas/privacidade">Privacidade</Link>
          <Link href="/politicas/termos">Termos</Link>
        </div>
      </footer>
    </>
  );
}

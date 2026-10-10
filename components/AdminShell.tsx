"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const links = [
  ["Resumo", "/admin"],
  ["Produtos", "/admin/produtos"],
  ["Categorias", "/admin/categorias"],
  ["Vitrines", "/admin/vitrines"],
  ["Blog", "/admin/blog"],
  ["Pedidos", "/admin/pedidos"],
  ["Cupons", "/admin/cupons"],
  ["Banners", "/admin/banners"],
  ["Clientes", "/admin/clientes"],
];

export function AdminShell({ children }: { children: ReactNode }) {
  const path = usePathname();
  return (
    <div className="admin">
      <aside className="side">
        <div className="logo" style={{ margin: "4px 10px 18px" }}>ATELIER</div>
        {links.map(([label, href]) => (
          <Link key={href} href={href} className={path === href ? "active" : ""}>{label}</Link>
        ))}
        <Link href="/" style={{ marginTop: 18 }}>Ver loja</Link>
      </aside>
      <main className="main">{children}</main>
    </div>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";
import { StoreShell } from "@/components/StoreShell";

const pages = [
  ["Trocas", "/politicas/trocas"],
  ["Envio", "/politicas/envio"],
  ["Privacidade", "/politicas/privacidade"],
  ["Termos", "/politicas/termos"],
];

export function PolicyLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <StoreShell>
      <section className="section">
        <div className="wrap policy">
          <aside>
            {pages.map(([label, href]) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
          </aside>
          <article>
            <h1>{title}</h1>
            {children}
          </article>
        </div>
      </section>
    </StoreShell>
  );
}

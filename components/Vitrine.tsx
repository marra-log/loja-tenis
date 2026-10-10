"use client";

import { StoreShell } from "@/components/StoreShell";
import { ProductCard } from "@/components/ProductCard";
import { useCatalog } from "@/components/Providers";

export function Vitrine({ title, kicker, pick }: { title: string; kicker: string; pick: "launch" | "bestseller" | "promo" }) {
  const { products } = useCatalog();
  const list = products.filter((p) => p.active && p[pick]);
  return (
    <StoreShell>
      <section className="section">
        <div className="wrap">
          <div className="kicker">{kicker}</div>
          <h1>{title}</h1>
          <div className="grid">{list.map((p) => <ProductCard key={p.sku} product={p} />)}</div>
          {!list.length && <p>Nada nesta vitrine ainda. Marque os produtos no painel.</p>}
        </div>
      </section>
    </StoreShell>
  );
}

"use client";

import { useCatalog } from "./Providers";
import { ProductCard } from "./ProductCard";

export function Shelf({ title, href, filter }: { title: string; href: string; filter: (p: { launch: boolean; bestseller: boolean; promo: boolean; featured: boolean; active: boolean }) => boolean }) {
  const { products } = useCatalog();
  const list = products.filter((p) => p.active && filter(p));
  if (!list.length) return null;
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <h2>{title}</h2>
          <a href={href}>Ver tudo</a>
        </div>
        <div className="grid">{list.slice(0, 3).map((p) => <ProductCard key={p.sku} product={p} />)}</div>
      </div>
    </section>
  );
}

"use client";

import { StoreShell } from "@/components/StoreShell";
import { ProductCard } from "@/components/ProductCard";
import { useCatalog } from "@/components/Providers";

export default function CatalogPage() {
  const { products } = useCatalog();
  const list = products.filter((p) => p.active);
  return (
    <StoreShell>
      <section className="section">
        <div className="wrap">
          <h1>Catálogo</h1>
          <div className="grid">{list.map((p) => <ProductCard key={p.sku} product={p} />)}</div>
        </div>
      </section>
    </StoreShell>
  );
}

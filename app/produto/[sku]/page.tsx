"use client";

import { useParams } from "next/navigation";
import { StoreShell } from "@/components/StoreShell";
import { ProductBuy } from "@/components/ProductBuy";
import { ProductCard } from "@/components/ProductCard";
import { useCatalog } from "@/components/Providers";

export default function ProductPage() {
  const { sku } = useParams<{ sku: string }>();
  const { products } = useCatalog();
  const product = products.find((p) => p.sku === sku);
  if (!product) {
    return <StoreShell><section className="section"><div className="wrap"><h1>Produto não encontrado</h1></div></section></StoreShell>;
  }
  const related = products.filter((p) => p.sku !== product.sku && p.brandSlug === product.brandSlug && p.active).slice(0, 3);
  return (
    <StoreShell>
      <div className="wrap pdp">
        <div>
          <img className="gallery" src={product.cover} alt={product.name} />
        </div>
        <ProductBuy product={product} />
      </div>
      {related.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <h2>Da mesma marca</h2>
            <div className="grid">{related.map((p) => <ProductCard key={p.sku} product={p} />)}</div>
          </div>
        </section>
      )}
    </StoreShell>
  );
}

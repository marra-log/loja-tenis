"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { StoreShell } from "@/components/StoreShell";
import { ProductCard } from "@/components/ProductCard";
import { useCatalog } from "@/components/Providers";

export default function StyleSubPage() {
  const { slug, sub } = useParams<{ slug: string; sub: string }>();
  const { styles, products } = useCatalog();
  const style = styles.find((s) => s.slug === slug);
  const child = style?.subs.find((s) => s.slug === sub);
  const list = products.filter((p) => p.active && p.styleSlug === slug && p.styleSubSlug === sub);
  return (
    <StoreShell>
      <section className="section">
        <div className="wrap">
          <div className="kicker"><Link href={`/estilo/${slug}`}>{style?.name}</Link></div>
          <h1>{child?.name ?? "Subcategoria"}</h1>
          <div className="grid">{list.map((p) => <ProductCard key={p.sku} product={p} />)}</div>
          {!list.length && <p>Nenhum produto nesta subcategoria ainda.</p>}
        </div>
      </section>
    </StoreShell>
  );
}

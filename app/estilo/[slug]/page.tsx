"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { StoreShell } from "@/components/StoreShell";
import { ProductCard } from "@/components/ProductCard";
import { useCatalog } from "@/components/Providers";

export default function StylePage() {
  const { slug } = useParams<{ slug: string }>();
  const { styles, products } = useCatalog();
  const style = styles.find((s) => s.slug === slug);
  const list = products.filter((p) => p.active && p.styleSlug === slug);
  return (
    <StoreShell>
      <section className="section">
        <div className="wrap">
          <div className="kicker">ESTILO</div>
          <h1>{style?.name ?? "Estilo"}</h1>
          <div className="filters">
            {style?.subs.map((sub) => (
              <Link key={sub.slug} className="chip" href={`/estilo/${slug}/${sub.slug}`}>{sub.name}</Link>
            ))}
          </div>
          <div className="grid">{list.map((p) => <ProductCard key={p.sku} product={p} />)}</div>
        </div>
      </section>
    </StoreShell>
  );
}

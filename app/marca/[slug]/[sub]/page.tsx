"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { StoreShell } from "@/components/StoreShell";
import { ProductCard } from "@/components/ProductCard";
import { useCatalog } from "@/components/Providers";

export default function BrandSubPage() {
  const { slug, sub } = useParams<{ slug: string; sub: string }>();
  const { brands, products } = useCatalog();
  const brand = brands.find((s) => s.slug === slug);
  const child = brand?.subs.find((s) => s.slug === sub);
  const list = products.filter((p) => p.active && p.brandSlug === slug && p.brandSubSlug === sub);
  return (
    <StoreShell>
      <section className="section">
        <div className="wrap">
          <div className="kicker"><Link href={`/marca/${slug}`}>{brand?.name}</Link></div>
          <h1>{child?.name ?? "Linha"}</h1>
          <div className="grid">{list.map((p) => <ProductCard key={p.sku} product={p} />)}</div>
          {!list.length && <p>Nenhum produto nesta linha ainda.</p>}
        </div>
      </section>
    </StoreShell>
  );
}

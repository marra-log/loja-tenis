"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { StoreShell } from "@/components/StoreShell";
import { ProductCard } from "@/components/ProductCard";
import { useCatalog } from "@/components/Providers";

export default function BrandPage() {
  const { slug } = useParams<{ slug: string }>();
  const { brands, products } = useCatalog();
  const brand = brands.find((s) => s.slug === slug);
  const list = products.filter((p) => p.active && p.brandSlug === slug);
  return (
    <StoreShell>
      <section className="section">
        <div className="wrap">
          <div className="kicker">MARCA</div>
          <h1>{brand?.name ?? "Marca"}</h1>
          <div className="filters">
            {brand?.subs.map((sub) => (
              <Link key={sub.slug} className="chip" href={`/marca/${slug}/${sub.slug}`}>{sub.name}</Link>
            ))}
          </div>
          <div className="grid">{list.map((p) => <ProductCard key={p.sku} product={p} />)}</div>
        </div>
      </section>
    </StoreShell>
  );
}

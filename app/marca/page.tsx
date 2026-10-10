"use client";

import Link from "next/link";
import { StoreShell } from "@/components/StoreShell";
import { useCatalog } from "@/components/Providers";

export default function BrandsPage() {
  const { brands, products } = useCatalog();
  return (
    <StoreShell>
      <section className="section">
        <div className="wrap">
          <h1>Marca</h1>
          <p className="lead">A categoria é a marca. Dentro dela, a linha.</p>
          <div className="cat-grid">
            {brands.map((brand) => (
              <article key={brand.slug} className="panel pad">
                <h2><Link href={`/marca/${brand.slug}`}>{brand.name}</Link></h2>
                <p>{products.filter((p) => p.active && p.brandSlug === brand.slug).length} produtos</p>
                <div className="filters">
                  {brand.subs.map((sub) => (
                    <Link key={sub.slug} className="chip" href={`/marca/${brand.slug}/${sub.slug}`}>{sub.name}</Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </StoreShell>
  );
}

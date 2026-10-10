"use client";

import Link from "next/link";
import { StoreShell } from "@/components/StoreShell";
import { useCatalog } from "@/components/Providers";

export default function StylesPage() {
  const { styles, products } = useCatalog();
  return (
    <StoreShell>
      <section className="section">
        <div className="wrap">
          <h1>Estilo</h1>
          <p className="lead">A categoria é o estilo. Dentro dele, a subcategoria.</p>
          <div className="cat-grid">
            {styles.map((style) => (
              <article key={style.slug} className="panel pad">
                <h2><Link href={`/estilo/${style.slug}`}>{style.name}</Link></h2>
                <p>{products.filter((p) => p.active && p.styleSlug === style.slug).length} produtos</p>
                <div className="filters">
                  {style.subs.map((sub) => (
                    <Link key={sub.slug} className="chip" href={`/estilo/${style.slug}/${sub.slug}`}>{sub.name}</Link>
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

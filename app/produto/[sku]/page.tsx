import { notFound } from "next/navigation";
import { StoreShell } from "@/components/StoreShell";
import { ProductBuy } from "@/components/ProductBuy";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/data";

export default async function ProductPage({ params }: { params: Promise<{ sku: string }> }) {
  const { sku } = await params;
  const product = products.find((p) => p.sku === sku);
  if (!product) notFound();
  const related = products.filter((p) => p.sku !== product.sku && p.brand === product.brand).slice(0, 3);
  return (
    <StoreShell>
      <div className="wrap pdp">
        <div>
          <img className="gallery" src={product.cover} alt={product.name} />
          <div className="thumbs">
            <img src={product.cover} alt="" />
            <img src="/banners/editorial.jpg" alt="" />
            <img src="/banners/hero.jpg" alt="" />
          </div>
        </div>
        <ProductBuy product={product} />
      </div>
      {related.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <h2>Da mesma marca</h2>
            <div className="grid">
              {related.map((p) => <ProductCard key={p.sku} product={p} />)}
            </div>
          </div>
        </section>
      )}
    </StoreShell>
  );
}

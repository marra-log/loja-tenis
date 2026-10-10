import { StoreShell } from "@/components/StoreShell";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/data";

export default function CatalogPage() {
  return (
    <StoreShell>
      <section className="section">
        <div className="wrap">
          <h2>Catálogo</h2>
          <div className="filters">
            <span className="chip">Todas as marcas</span>
            <span className="chip">Nike</span>
            <span className="chip">Adidas</span>
            <span className="chip">Tamanho</span>
            <span className="chip">Até R$ 800</span>
          </div>
          <div className="grid">
            {products.filter((p) => p.active).map((p) => <ProductCard key={p.sku} product={p} />)}
          </div>
        </div>
      </section>
    </StoreShell>
  );
}

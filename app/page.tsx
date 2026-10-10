import Link from "next/link";
import { StoreShell } from "@/components/StoreShell";
import { ProductCard } from "@/components/ProductCard";
import { banners, products } from "@/lib/data";

export default function HomePage() {
  const featured = products.filter((p) => p.featured);
  const [hero, promo, editorial] = banners;
  return (
    <StoreShell>
      <section className="hero-banner">
        <img src={hero.image} alt="Lançamento da loja" />
        <div className="hero-copy">
          <div className="kicker">PRIMEIRA LINHA</div>
          <h1>{hero.title}</h1>
          <p>{hero.subtitle} Pix, cartão e frete por CEP.</p>
          <Link className="btn" href={hero.href}>Ver catálogo</Link>
        </div>
      </section>
      <div className="wrap">
        <div className="benefits">
          <div className="benefit"><strong>Pix com desconto</strong><span>Preço menor já na ficha.</span></div>
          <div className="benefit"><strong>Troca em 7 dias</strong><span>Arrependimento no padrão do CDC.</span></div>
          <div className="benefit"><strong>Envio em 24h</strong><span>Pedido pago sai no dia seguinte.</span></div>
        </div>
      </div>
      <section className="section">
        <div className="wrap promo-grid">
          <Link href={promo.href} className="promo">
            <img src={promo.image} alt="Desconto no Pix" />
            <div><span className="kicker">DESCONTO</span><strong>{promo.title}</strong><span>{promo.subtitle}</span></div>
          </Link>
          <Link href={editorial.href} className="promo">
            <img src={editorial.image} alt="Editorial da coleção" />
            <div><span className="kicker">COLEÇÃO</span><strong>{editorial.title}</strong><span>{editorial.subtitle}</span></div>
          </Link>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2>Lançamentos</h2>
          <div className="grid">
            {featured.map((p) => <ProductCard key={p.sku} product={p} />)}
          </div>
        </div>
      </section>
    </StoreShell>
  );
}

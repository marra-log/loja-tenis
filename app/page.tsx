"use client";

import Link from "next/link";
import { StoreShell } from "@/components/StoreShell";
import { Shelf } from "@/components/Shelf";
import { banners } from "@/lib/data";

export default function HomePage() {
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
          <Link className="benefit" href="/estilo"><strong>Por estilo</strong><span>Casual, corrida, basquete e skate.</span></Link>
          <Link className="benefit" href="/marca"><strong>Por marca</strong><span>Nike, Adidas e New Balance.</span></Link>
          <Link className="benefit" href="/promocoes"><strong>Promoções</strong><span>Preço riscado já na ficha.</span></Link>
        </div>
      </div>
      <section className="section">
        <div className="wrap promo-grid">
          <Link href={promo.href} className="promo">
            <img src={promo.image} alt="Promoções" />
            <div><span className="kicker">PROMOÇÃO</span><strong>{promo.title}</strong><span>{promo.subtitle}</span></div>
          </Link>
          <Link href={editorial.href} className="promo">
            <img src={editorial.image} alt="Lançamentos" />
            <div><span className="kicker">NOVO</span><strong>{editorial.title}</strong><span>{editorial.subtitle}</span></div>
          </Link>
        </div>
      </section>
      <Shelf title="Lançamentos" href="/lancamentos" filter={(p) => p.launch} />
      <Shelf title="Mais vendidos" href="/mais-vendidos" filter={(p) => p.bestseller} />
      <Shelf title="Promoções" href="/promocoes" filter={(p) => p.promo} />
    </StoreShell>
  );
}

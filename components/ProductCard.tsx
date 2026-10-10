"use client";

import Link from "next/link";
import type { Product } from "@/lib/types";
import { brl } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  const price = product.promo && product.promoPrice ? product.promoPrice : product.price;
  return (
    <Link href={`/produto/${product.sku}`} className="card">
      <div className="cover-wrap">
        <img className="cover" src={product.cover} alt={product.name} />
        {product.launch && <span className="tag">Lançamento</span>}
        {product.promo && <span className="tag promo">Promoção</span>}
        {product.bestseller && <span className="tag best">Mais vendido</span>}
      </div>
      <div className="card-body">
        <div className="brand">{product.brand} · {product.style}</div>
        <h3>{product.name}</h3>
        <div>
          {product.promo && product.promoPrice ? <span className="was">{brl(product.price)}</span> : null}
          <span className="price">{brl(price)}</span>
          <span className="pix">{brl(product.pixPrice)} no Pix</span>
        </div>
      </div>
    </Link>
  );
}

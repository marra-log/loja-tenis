"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { brl, stockOf } from "@/lib/types";
import { useCart } from "./Providers";

export function ProductBuy({ product }: { product: Product }) {
  const cart = useCart();
  const first = product.variants.find((v) => v.stock > 0)?.size ?? product.variants[0]?.size;
  const [size, setSize] = useState(first);
  const [added, setAdded] = useState(false);
  const selected = product.variants.find((v) => v.size === size);
  const off = !selected || selected.stock === 0;
  const price = product.promo && product.promoPrice ? product.promoPrice : product.price;
  return (
    <div>
      <div className="brand">{product.brand} · {product.brandSub} · {product.style} · {product.styleSub}</div>
      <h1 style={{ margin: "6px 0 8px", fontSize: 32 }}>{product.name}</h1>
      <div className="sku">SKU {product.sku}</div>
      <div className="price" style={{ fontSize: 26, marginTop: 10 }}>
        {product.promo && product.promoPrice ? <span className="was">{brl(product.price)}</span> : null}
        {brl(price)}
      </div>
      <div className="pix" style={{ marginLeft: 0 }}>{brl(product.pixPrice)} no Pix</div>
      <p style={{ color: "#6e6a62", lineHeight: 1.5 }}>{product.description}</p>
      <div className="sizes">
        {product.variants.map((v) => (
          <button
            key={v.size}
            className={v.stock === 0 ? "size off" : size === v.size ? "size on" : "size"}
            disabled={v.stock === 0}
            onClick={() => setSize(v.size)}
          >
            {v.size}
          </button>
        ))}
      </div>
      <p style={{ fontSize: 13, color: "#6e6a62" }}>
        {selected ? `${selected.stock} no tamanho ${selected.size}` : "Escolha um tamanho"} · {stockOf(product)} na grade
      </p>
      <button
        className={off ? "btn ghost" : "btn dark"}
        disabled={off}
        onClick={() => {
          if (!size || off) return;
          cart.add(product.sku, size);
          setAdded(true);
        }}
      >
        {off ? "Tamanho esgotado" : "Adicionar ao carrinho"}
      </button>
      {added && <p className="added">Adicionado. <Link href="/carrinho">Ver carrinho</Link></p>}
      <ul className="notes">
        <li>Frete calculado pelo CEP no checkout.</li>
        <li>Troca em 7 dias, no padrão do CDC.</li>
        <li>Envio em até 24h após a confirmação do pagamento.</li>
      </ul>
    </div>
  );
}

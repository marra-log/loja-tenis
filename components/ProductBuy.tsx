"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { brl, stockOf } from "@/lib/types";

export function ProductBuy({ product }: { product: Product }) {
  const first = product.variants.find((v) => v.stock > 0)?.size ?? product.variants[0]?.size;
  const [size, setSize] = useState(first);
  const selected = product.variants.find((v) => v.size === size);
  const off = !selected || selected.stock === 0;
  return (
    <div>
      <div className="brand">{product.brand} · {product.category} · {product.gender}</div>
      <h1 style={{ margin: "6px 0 8px", fontSize: 32 }}>{product.name}</h1>
      <div className="sku">SKU {product.sku}</div>
      <div className="price" style={{ fontSize: 26, marginTop: 10 }}>{brl(product.price)}</div>
      <div className="pix" style={{ marginLeft: 0 }}>{brl(product.pixPrice)} no Pix · 5% já aplicado</div>
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
      <Link className={off ? "btn ghost" : "btn dark"} href={off ? "/catalogo" : "/carrinho"}>
        {off ? "Tamanho esgotado" : "Adicionar ao carrinho"}
      </Link>
      <ul className="notes">
        <li>Frete calculado pelo CEP no checkout.</li>
        <li>Troca em 7 dias, no padrão do CDC.</li>
        <li>Envio em até 24h após a confirmação do pagamento.</li>
      </ul>
    </div>
  );
}

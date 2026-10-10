"use client";

import Link from "next/link";
import { useCatalog } from "@/components/Providers";
import { brl } from "@/lib/types";

export default function AdminProducts() {
  const { products, saveProduct } = useCatalog();
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Produtos</h1>
        <Link className="btn dark" href="/admin/produtos/novo">Novo produto</Link>
      </div>
      <div className="panel" style={{ padding: 8 }}>
        <table>
          <thead>
            <tr><th>SKU</th><th>NOME</th><th>ESTILO</th><th>MARCA</th><th>PREÇO</th><th>ATIVO</th><th>FLAGS</th></tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.sku}>
                <td>{p.sku}</td>
                <td>{p.name}</td>
                <td>{p.style} / {p.styleSub}</td>
                <td>{p.brand} / {p.brandSub}</td>
                <td>{brl(p.price)}</td>
                <td><button className="text-btn" onClick={() => saveProduct({ ...p, active: !p.active })}>{p.active ? "sim" : "não"}</button></td>
                <td className="flag-row">
                  <button className={p.launch ? "chip on" : "chip"} onClick={() => saveProduct({ ...p, launch: !p.launch })}>lançamento</button>
                  <button className={p.bestseller ? "chip on" : "chip"} onClick={() => saveProduct({ ...p, bestseller: !p.bestseller })}>vendido</button>
                  <button className={p.promo ? "chip on" : "chip"} onClick={() => saveProduct({ ...p, promo: !p.promo })}>promo</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

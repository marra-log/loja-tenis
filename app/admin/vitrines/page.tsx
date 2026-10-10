"use client";

import { useCatalog } from "@/components/Providers";

export default function AdminVitrines() {
  const { products, saveProduct } = useCatalog();
  const groups = [
    ["Lançamentos", "launch"],
    ["Mais vendidos", "bestseller"],
    ["Promoções", "promo"],
  ] as const;
  return (
    <>
      <h1>Vitrines</h1>
      <p className="lead">Ligar ou desligar um produto aqui muda a home e a página da vitrine.</p>
      {groups.map(([title, key]) => (
        <section key={key} style={{ marginBottom: 18 }}>
          <h2>{title}</h2>
          <div className="panel" style={{ padding: 8 }}>
            <table>
              <tbody>
                {products.map((p) => (
                  <tr key={p.sku}>
                    <td>{p.name}</td>
                    <td>{p.brand}</td>
                    <td><button className={p[key] ? "chip on" : "chip"} onClick={() => saveProduct({ ...p, [key]: !p[key] })}>{p[key] ? "na vitrine" : "fora"}</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </>
  );
}

import Link from "next/link";
import { StoreShell } from "@/components/StoreShell";
import { products } from "@/lib/data";
import { brl } from "@/lib/types";

export default function DiscountsPage() {
  return (
    <StoreShell>
      <section className="page-hero">
        <img src="/banners/desconto.jpg" alt="Descontos" />
        <div className="wrap">
          <div className="kicker">DESCONTOS</div>
          <h1>Pague menos no Pix.</h1>
          <p>O desconto de 5% já está no preço Pix de cada ficha. Não precisa de cupom.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap discount-grid">
          <article className="panel pad">
            <div className="kicker">PIX</div>
            <h2>5% em qualquer modelo</h2>
            <p>Válido para pagamento Pix confirmado. O valor menor aparece na ficha e no checkout quando o Pix é escolhido.</p>
          </article>
          <article className="panel pad">
            <div className="kicker">CUPOM</div>
            <h2>ABERTURA10</h2>
            <p>10% na primeira compra, não cumulativo com o Pix. Use no checkout. Válido enquanto a campanha de abertura estiver no ar.</p>
          </article>
        </div>
        <div className="wrap" style={{ marginTop: 22 }}>
          <h2>Preço e preço Pix</h2>
          <div className="panel" style={{ padding: 8 }}>
            <table>
              <thead><tr><th>MODELO</th><th>PREÇO</th><th>NO PIX</th><th>VOCÊ ECONOMIZA</th></tr></thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.sku}>
                    <td><Link href={`/produto/${p.sku}`}>{p.name}</Link></td>
                    <td>{brl(p.price)}</td>
                    <td>{brl(p.pixPrice)}</td>
                    <td>{brl(p.price - p.pixPrice)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </StoreShell>
  );
}

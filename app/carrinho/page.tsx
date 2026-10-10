import Link from "next/link";
import { StoreShell } from "@/components/StoreShell";
import { products } from "@/lib/data";
import { brl } from "@/lib/types";

export default function CartPage() {
  const item = products[0];
  return (
    <StoreShell>
      <section className="section">
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1.4fr .8fr", gap: 16 }}>
          <div className="panel" style={{ padding: 16 }}>
            <h2>Carrinho</h2>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
              <div>
                <strong>{item.name}</strong>
                <div style={{ color: "#6e6a62", fontSize: 13 }}>Tamanho 40 · {item.brand}</div>
              </div>
              <div>{brl(item.price)}</div>
            </div>
          </div>
          <div className="panel" style={{ padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span>Subtotal</span><strong>{brl(item.price)}</strong></div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "8px 0 16px" }}><span>Frete</span><span>calcular no CEP</span></div>
            <Link className="btn dark" href="/checkout">Fechar pedido</Link>
          </div>
        </div>
      </section>
    </StoreShell>
  );
}

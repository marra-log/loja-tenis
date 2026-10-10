import { orders, products, lowStock } from "@/lib/data";
import { brl } from "@/lib/types";

export default function AdminHome() {
  const paid = orders.filter((o) => o.status === "pago" || o.status === "enviado" || o.status === "entregue");
  const total = paid.reduce((s, o) => s + o.total, 0);
  return (
    <>
      <h1>Resumo</h1>
      <div className="stats">
        <div className="stat"><span>Pedidos do dia</span><strong>2</strong></div>
        <div className="stat"><span>Pagos</span><strong>{paid.length}</strong></div>
        <div className="stat"><span>Faturado</span><strong>{brl(total)}</strong></div>
        <div className="stat"><span>Estoque baixo</span><strong>{lowStock.length}</strong></div>
      </div>
      <div className="panel" style={{ padding: 8 }}>
        <table>
          <thead><tr><th>PEDIDO</th><th>CLIENTE</th><th>STATUS</th><th>TOTAL</th></tr></thead>
          <tbody>
            {orders.slice(0, 3).map((o) => (
              <tr key={o.number}>
                <td>#{o.number}</td>
                <td>{o.customer}</td>
                <td><span className={`badge ${o.status}`}>{o.status}</span></td>
                <td>{brl(o.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ color: "#6e6a62", fontSize: 13 }}>{products.length} produtos de exemplo. A importação dos 100 entra pela planilha.</p>
    </>
  );
}

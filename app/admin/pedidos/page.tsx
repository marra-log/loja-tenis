import { orders } from "@/lib/data";
import { brl } from "@/lib/types";

export default function AdminOrders() {
  return (
    <>
      <h1>Pedidos</h1>
      <div className="panel" style={{ padding: 8 }}>
        <table>
          <thead>
            <tr><th>#</th><th>CLIENTE</th><th>ITENS</th><th>PAGAMENTO</th><th>STATUS</th><th>TOTAL</th><th>QUANDO</th></tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.number}>
                <td>{o.number}</td>
                <td>{o.customer}<div style={{ color: "#6e6a62" }}>{o.email}</div></td>
                <td>{o.items}</td>
                <td>{o.payment}</td>
                <td><span className={`badge ${o.status}`}>{o.status}</span></td>
                <td>{brl(o.total)}</td>
                <td>{o.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

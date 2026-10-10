import { orders } from "@/lib/data";

export default function AdminCustomers() {
  const unique = Array.from(new Map(orders.map((o) => [o.email, o])).values());
  return (
    <>
      <h1>Clientes</h1>
      <div className="panel" style={{ padding: 8 }}>
        <table>
          <thead><tr><th>NOME</th><th>E-MAIL</th><th>PEDIDOS</th></tr></thead>
          <tbody>
            {unique.map((o) => (
              <tr key={o.email}>
                <td>{o.customer}</td>
                <td>{o.email}</td>
                <td>1</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

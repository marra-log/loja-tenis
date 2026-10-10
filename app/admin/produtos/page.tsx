import Link from "next/link";
import { products } from "@/lib/data";
import { brl, stockOf } from "@/lib/types";

export default function AdminProducts() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Produtos</h1>
        <Link className="btn dark" href="/admin/produtos/novo">Novo produto</Link>
      </div>
      <div className="panel" style={{ padding: 8 }}>
        <table>
          <thead>
            <tr><th>SKU</th><th>NOME</th><th>MARCA</th><th>PREÇO</th><th>GRADE</th><th>ATIVO</th></tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.sku}>
                <td>{p.sku}</td>
                <td>{p.name}</td>
                <td>{p.brand}</td>
                <td>{brl(p.price)}</td>
                <td>{stockOf(p)}</td>
                <td>{p.active ? "sim" : "não"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

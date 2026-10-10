import Link from "next/link";
import type { Product } from "@/lib/types";
import { brl } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/produto/${product.sku}`} className="card">
      <img className="cover" src={product.cover} alt={product.name} />
      <div className="card-body">
        <div className="brand">{product.brand}</div>
        <h3>{product.name}</h3>
        <div>
          <span className="price">{brl(product.price)}</span>
          <span className="pix">{brl(product.pixPrice)} no Pix</span>
        </div>
      </div>
    </Link>
  );
}

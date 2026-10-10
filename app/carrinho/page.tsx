"use client";

import Link from "next/link";
import { StoreShell } from "@/components/StoreShell";
import { useCart, useCatalog } from "@/components/Providers";
import { brl } from "@/lib/types";

export default function CartPage() {
  const cart = useCart();
  const { products } = useCatalog();
  const lines = cart.items.map((item) => {
    const product = products.find((p) => p.sku === item.sku);
    const price = product?.promo && product.promoPrice ? product.promoPrice : product?.price ?? 0;
    return { ...item, product, price, total: price * item.qty };
  }).filter((line) => line.product);
  const subtotal = lines.reduce((sum, line) => sum + line.total, 0);
  const pix = lines.reduce((sum, line) => sum + (line.product?.pixPrice ?? line.price) * line.qty, 0);
  return (
    <StoreShell>
      <section className="section">
        <div className="wrap cart-layout">
          <div className="panel pad">
            <h1>Carrinho</h1>
            {!lines.length && <p>Seu carrinho está vazio. <Link href="/catalogo">Ver catálogo</Link></p>}
            {lines.map((line) => (
              <div className="cart-line" key={`${line.sku}-${line.size}`}>
                <img src={line.product?.cover} alt="" />
                <div>
                  <strong>{line.product?.name}</strong>
                  <div className="sku">Tamanho {line.size}</div>
                  <div className="qty">
                    <button onClick={() => cart.setQty(line.sku, line.size, line.qty - 1)}>-</button>
                    <span>{line.qty}</span>
                    <button onClick={() => cart.setQty(line.sku, line.size, line.qty + 1)}>+</button>
                  </div>
                </div>
                <div>
                  <strong>{brl(line.total)}</strong>
                  <button className="text-btn" onClick={() => cart.remove(line.sku, line.size)}>Remover</button>
                </div>
              </div>
            ))}
          </div>
          <aside className="panel pad">
            <div className="sum"><span>Subtotal</span><strong>{brl(subtotal)}</strong></div>
            <div className="sum"><span>No Pix</span><strong>{brl(pix)}</strong></div>
            <div className="sum"><span>Frete</span><span>no checkout</span></div>
            <Link className={lines.length ? "btn dark" : "btn ghost"} href={lines.length ? "/checkout" : "/catalogo"}>
              {lines.length ? "Fechar pedido" : "Escolher produtos"}
            </Link>
          </aside>
        </div>
      </section>
    </StoreShell>
  );
}

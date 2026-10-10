"use client";

import { useState } from "react";
import { useCatalog } from "@/components/Providers";
import { slugify } from "@/lib/types";
import type { Gender, Product } from "@/lib/types";

export default function NewProduct() {
  const { styles, brands, saveProduct } = useCatalog();
  const [form, setForm] = useState({
    name: "", sku: "", styleSlug: styles[0]?.slug ?? "", styleSubSlug: styles[0]?.subs[0]?.slug ?? "",
    brandSlug: brands[0]?.slug ?? "", brandSubSlug: brands[0]?.subs[0]?.slug ?? "",
    gender: "unissex" as Gender, price: "", promoPrice: "", description: "", sizes: "38:2, 39:2, 40:1",
  });
  const [saved, setSaved] = useState(false);
  const style = styles.find((s) => s.slug === form.styleSlug);
  const brand = brands.find((s) => s.slug === form.brandSlug);
  function set<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }
  return (
    <>
      <h1>Novo produto</h1>
      <form className="form panel" style={{ padding: 16 }} onSubmit={(e) => {
        e.preventDefault();
        const price = Number(form.price);
        const styleSub = style?.subs.find((s) => s.slug === form.styleSubSlug);
        const brandSub = brand?.subs.find((s) => s.slug === form.brandSubSlug);
        const product: Product = {
          sku: form.sku || slugify(form.name),
          name: form.name,
          brand: brand?.name ?? "",
          brandSlug: form.brandSlug,
          brandSub: brandSub?.name ?? "",
          brandSubSlug: form.brandSubSlug,
          style: style?.name ?? "",
          styleSlug: form.styleSlug,
          styleSub: styleSub?.name ?? "",
          styleSubSlug: form.styleSubSlug,
          gender: form.gender,
          price,
          pixPrice: Math.round(price * 0.95 * 100) / 100,
          promoPrice: form.promoPrice ? Number(form.promoPrice) : undefined,
          description: form.description,
          featured: false,
          launch: false,
          bestseller: false,
          promo: Boolean(form.promoPrice),
          active: true,
          cover: "/produtos/branco.jpg",
          variants: form.sizes.split(",").map((part) => {
            const [size, stock] = part.trim().split(":");
            return { size, stock: Number(stock || 0) };
          }).filter((v) => v.size),
        };
        saveProduct(product);
        setSaved(true);
      }}>
        <div><label>SKU</label><input value={form.sku} onChange={(e) => set("sku", e.target.value)} placeholder="NK-NOVO-01" /></div>
        <div><label>Nome</label><input required value={form.name} onChange={(e) => set("name", e.target.value)} /></div>
        <div><label>Estilo</label><select value={form.styleSlug} onChange={(e) => set("styleSlug", e.target.value)}>{styles.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}</select></div>
        <div><label>Subcategoria</label><select value={form.styleSubSlug} onChange={(e) => set("styleSubSlug", e.target.value)}>{style?.subs.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}</select></div>
        <div><label>Marca</label><select value={form.brandSlug} onChange={(e) => set("brandSlug", e.target.value)}>{brands.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}</select></div>
        <div><label>Linha</label><select value={form.brandSubSlug} onChange={(e) => set("brandSubSlug", e.target.value)}>{brand?.subs.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}</select></div>
        <div><label>Preço</label><input required value={form.price} onChange={(e) => set("price", e.target.value)} placeholder="799.90" /></div>
        <div><label>Preço promo</label><input value={form.promoPrice} onChange={(e) => set("promoPrice", e.target.value)} placeholder="opcional" /></div>
        <div className="full"><label>Descrição</label><textarea rows={3} value={form.description} onChange={(e) => set("description", e.target.value)} /></div>
        <div className="full"><label>Grade</label><input value={form.sizes} onChange={(e) => set("sizes", e.target.value)} /></div>
        <div className="full"><button className="btn dark" type="submit">Salvar</button> {saved && <span> Salvo neste navegador.</span>}</div>
      </form>
    </>
  );
}

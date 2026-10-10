"use client";

import { useState } from "react";
import { useCatalog } from "@/components/Providers";
import type { Category } from "@/lib/types";

function Block({ title, list, onAdd, onSub }: { title: string; list: Category[]; onAdd: (name: string) => void; onSub: (slug: string, name: string) => void }) {
  const [name, setName] = useState("");
  const [sub, setSub] = useState<Record<string, string>>({});
  return (
    <div>
      <h2>{title}</h2>
      <form className="inline" onSubmit={(e) => { e.preventDefault(); onAdd(name); setName(""); }}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder={`Nova ${title.toLowerCase()}`} />
        <button className="btn dark" type="submit">Criar</button>
      </form>
      {list.map((item) => (
        <article key={item.slug} className="panel pad" style={{ marginTop: 10 }}>
          <strong>{item.name}</strong>
          <div className="filters" style={{ marginTop: 8 }}>
            {item.subs.map((s) => <span key={s.slug} className="chip">{s.name}</span>)}
          </div>
          <form className="inline" onSubmit={(e) => { e.preventDefault(); onSub(item.slug, sub[item.slug] || ""); setSub({ ...sub, [item.slug]: "" }); }}>
            <input value={sub[item.slug] || ""} onChange={(e) => setSub({ ...sub, [item.slug]: e.target.value })} placeholder="Nova subcategoria" />
            <button className="btn ghost" type="submit">Adicionar</button>
          </form>
        </article>
      ))}
    </div>
  );
}

export default function AdminCategories() {
  const { styles, brands, addStyle, addBrand, addSub } = useCatalog();
  return (
    <>
      <h1>Categorias</h1>
      <p className="lead">Estilo e marca são categorias. O que fica dentro é subcategoria.</p>
      <div className="discount-grid">
        <Block title="Estilo" list={styles} onAdd={addStyle} onSub={(slug, name) => addSub("estilo", slug, name)} />
        <Block title="Marca" list={brands} onAdd={addBrand} onSub={(slug, name) => addSub("marca", slug, name)} />
      </div>
    </>
  );
}

"use client";

import { useState } from "react";
import { useCatalog } from "@/components/Providers";
import { slugify } from "@/lib/types";
import type { Post } from "@/lib/types";

export default function AdminBlog() {
  const { posts, savePost, removePost } = useCatalog();
  const [form, setForm] = useState({ title: "", excerpt: "", body: "" });
  return (
    <>
      <h1>Blog</h1>
      <form className="form panel" style={{ padding: 16, marginBottom: 16 }} onSubmit={(e) => {
        e.preventDefault();
        const post: Post = {
          slug: slugify(form.title),
          title: form.title,
          excerpt: form.excerpt,
          body: form.body,
          date: new Date().toLocaleDateString("pt-BR"),
          cover: "/banners/editorial.jpg",
          published: true,
        };
        savePost(post);
        setForm({ title: "", excerpt: "", body: "" });
      }}>
        <div className="full"><label>Título</label><input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></div>
        <div className="full"><label>Resumo</label><input required value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} /></div>
        <div className="full"><label>Texto</label><textarea required rows={4} value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })} /></div>
        <div className="full"><button className="btn dark" type="submit">Publicar</button></div>
      </form>
      <div className="panel" style={{ padding: 8 }}>
        <table>
          <thead><tr><th>DATA</th><th>TÍTULO</th><th>STATUS</th><th></th></tr></thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.slug}>
                <td>{post.date}</td>
                <td>{post.title}</td>
                <td><button className="text-btn" onClick={() => savePost({ ...post, published: !post.published })}>{post.published ? "publicado" : "rascunho"}</button></td>
                <td><button className="text-btn" onClick={() => removePost(post.slug)}>excluir</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

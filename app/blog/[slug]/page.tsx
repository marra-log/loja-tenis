"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { StoreShell } from "@/components/StoreShell";
import { useCatalog } from "@/components/Providers";

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { posts } = useCatalog();
  const post = posts.find((p) => p.slug === slug && p.published);
  if (!post) {
    return <StoreShell><section className="section"><div className="wrap"><h1>Notícia não encontrada</h1></div></section></StoreShell>;
  }
  return (
    <StoreShell>
      <article className="section">
        <div className="wrap post">
          <Link href="/blog">Blog</Link>
          <div className="kicker">{post.date}</div>
          <h1>{post.title}</h1>
          <img src={post.cover} alt="" />
          <p>{post.body}</p>
        </div>
      </article>
    </StoreShell>
  );
}

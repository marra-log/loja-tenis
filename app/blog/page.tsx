"use client";

import Link from "next/link";
import { StoreShell } from "@/components/StoreShell";
import { useCatalog } from "@/components/Providers";

export default function BlogPage() {
  const { posts } = useCatalog();
  const list = posts.filter((p) => p.published);
  return (
    <StoreShell>
      <section className="section">
        <div className="wrap">
          <div className="kicker">NOTÍCIAS</div>
          <h1>Blog</h1>
          <div className="post-list">
            {list.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="post-card">
                <img src={post.cover} alt="" />
                <div>
                  <span>{post.date}</span>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </StoreShell>
  );
}

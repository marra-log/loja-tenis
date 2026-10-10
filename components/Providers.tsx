"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { CartItem, Category, Post, Product } from "@/lib/types";
import { seed } from "@/lib/data";
import { slugify } from "@/lib/types";

type Catalog = { products: Product[]; styles: Category[]; brands: Category[]; posts: Post[] };

type CatalogApi = Catalog & {
  ready: boolean;
  saveProduct: (product: Product) => void;
  addStyle: (name: string) => void;
  addBrand: (name: string) => void;
  addSub: (kind: "estilo" | "marca", slug: string, name: string) => void;
  savePost: (post: Post) => void;
  removePost: (slug: string) => void;
};

type CartApi = {
  items: CartItem[];
  add: (sku: string, size: string) => void;
  setQty: (sku: string, size: string, qty: number) => void;
  remove: (sku: string, size: string) => void;
  clear: () => void;
  count: number;
};

const CatalogContext = createContext<CatalogApi | null>(null);
const CartContext = createContext<CartApi | null>(null);
const CATALOG_KEY = "atelier-catalog";
const CART_KEY = "atelier-cart";

export function Providers({ children }: { children: ReactNode }) {
  const [catalog, setCatalog] = useState<Catalog>(seed);
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CATALOG_KEY);
      if (saved) setCatalog(JSON.parse(saved));
      const cart = localStorage.getItem(CART_KEY);
      if (cart) setItems(JSON.parse(cart));
    } catch {
      /* ignore broken local data */
    }
    setReady(true);
  }, []);

  function writeCatalog(next: Catalog) {
    setCatalog(next);
    localStorage.setItem(CATALOG_KEY, JSON.stringify(next));
  }
  function writeCart(next: CartItem[]) {
    setItems(next);
    localStorage.setItem(CART_KEY, JSON.stringify(next));
  }

  const catalogApi = useMemo<CatalogApi>(() => ({
    ...catalog,
    ready,
    saveProduct(product) {
      const exists = catalog.products.some((p) => p.sku === product.sku);
      const products = exists
        ? catalog.products.map((p) => (p.sku === product.sku ? product : p))
        : [product, ...catalog.products];
      writeCatalog({ ...catalog, products });
    },
    addStyle(name) {
      const slug = slugify(name);
      if (!slug || catalog.styles.some((s) => s.slug === slug)) return;
      writeCatalog({ ...catalog, styles: [...catalog.styles, { slug, name, kind: "estilo", subs: [] }] });
    },
    addBrand(name) {
      const slug = slugify(name);
      if (!slug || catalog.brands.some((s) => s.slug === slug)) return;
      writeCatalog({ ...catalog, brands: [...catalog.brands, { slug, name, kind: "marca", subs: [] }] });
    },
    addSub(kind, slug, name) {
      const subSlug = slugify(name);
      if (!subSlug) return;
      const sub = { slug: subSlug, name };
      const key = kind === "estilo" ? "styles" : "brands";
      const list = catalog[key].map((c) => c.slug === slug && !c.subs.some((s) => s.slug === sub.slug) ? { ...c, subs: [...c.subs, sub] } : c);
      writeCatalog({ ...catalog, [key]: list });
    },
    savePost(post) {
      const exists = catalog.posts.some((p) => p.slug === post.slug);
      const posts = exists ? catalog.posts.map((p) => (p.slug === post.slug ? post : p)) : [post, ...catalog.posts];
      writeCatalog({ ...catalog, posts });
    },
    removePost(slug) {
      writeCatalog({ ...catalog, posts: catalog.posts.filter((p) => p.slug !== slug) });
    },
  }), [catalog, ready]);

  const cartApi = useMemo<CartApi>(() => ({
    items,
    count: items.reduce((sum, item) => sum + item.qty, 0),
    add(sku, size) {
      const found = items.find((item) => item.sku === sku && item.size === size);
      writeCart(found ? items.map((item) => item.sku === sku && item.size === size ? { ...item, qty: item.qty + 1 } : item) : [...items, { sku, size, qty: 1 }]);
    },
    setQty(sku, size, qty) {
      writeCart(qty < 1 ? items.filter((item) => !(item.sku === sku && item.size === size)) : items.map((item) => item.sku === sku && item.size === size ? { ...item, qty } : item));
    },
    remove(sku, size) {
      writeCart(items.filter((item) => !(item.sku === sku && item.size === size)));
    },
    clear() {
      writeCart([]);
    },
  }), [items]);

  return (
    <CatalogContext.Provider value={catalogApi}>
      <CartContext.Provider value={cartApi}>{children}</CartContext.Provider>
    </CatalogContext.Provider>
  );
}

export function useCatalog() {
  const value = useContext(CatalogContext);
  if (!value) throw new Error("Catalog ausente");
  return value;
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) throw new Error("Carrinho ausente");
  return value;
}

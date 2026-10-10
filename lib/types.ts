export type Gender = "masculino" | "feminino" | "unissex";
export type OrderStatus = "aguardando" | "pago" | "enviado" | "entregue" | "cancelado";

export type Variant = { size: string; stock: number };

export type Product = {
  sku: string;
  name: string;
  brand: string;
  brandSlug: string;
  brandSub: string;
  brandSubSlug: string;
  style: string;
  styleSlug: string;
  styleSub: string;
  styleSubSlug: string;
  gender: Gender;
  price: number;
  pixPrice: number;
  promoPrice?: number;
  description: string;
  featured: boolean;
  launch: boolean;
  bestseller: boolean;
  promo: boolean;
  active: boolean;
  cover: string;
  variants: Variant[];
};

export type Subcategory = { slug: string; name: string };

export type Category = {
  slug: string;
  name: string;
  kind: "estilo" | "marca";
  subs: Subcategory[];
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  date: string;
  cover: string;
  published: boolean;
};

export type CartItem = { sku: string; size: string; qty: number };

export type Order = {
  number: number;
  status: OrderStatus;
  customer: string;
  email: string;
  items: number;
  total: number;
  payment: "Pix" | "Cartão";
  createdAt: string;
};

export const brl = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const stockOf = (product: Product) =>
  product.variants.reduce((sum, v) => sum + v.stock, 0);

export const slugify = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

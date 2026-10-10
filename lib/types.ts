export type Gender = "masculino" | "feminino" | "unissex";
export type OrderStatus = "aguardando" | "pago" | "enviado" | "entregue" | "cancelado";

export type Variant = { size: string; stock: number };

export type Product = {
  sku: string;
  name: string;
  brand: string;
  category: string;
  gender: Gender;
  price: number;
  pixPrice: number;
  description: string;
  featured: boolean;
  active: boolean;
  cover: string;
  variants: Variant[];
};

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

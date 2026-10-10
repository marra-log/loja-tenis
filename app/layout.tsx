import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "ATELIER — Tênis primeira linha",
  description: "Loja de tênis primeira linha. Catálogo, grade e checkout.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

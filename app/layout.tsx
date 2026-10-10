import "./globals.css";
import type { ReactNode } from "react";
import { Providers } from "@/components/Providers";

export const metadata = {
  title: "ATELIER — Tênis primeira linha",
  description: "Loja de tênis primeira linha. Estilo, marca, lançamentos e promoções.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

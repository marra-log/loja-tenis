# Loja de tênis — base do dia 1

Estrutura inicial do e-commerce de tênis primeira linha. Ainda não liga em banco real: o layout, o painel e o modelo de dados já estão no lugar para receber a planilha dos 100 produtos.

## O que já existe

- Vitrine: home, catálogo, ficha com grade, carrinho, checkout e página de troca.
- Painel: resumo, produtos, novo produto, pedidos, cupons, banners e clientes.
- Banco: `prisma/schema.prisma` e `sql/schema.sql` (Postgres).

## Modelo

Produto tem uma linha. A grade é `Variant` (tamanho + estoque). Pedido guarda o preço no momento da compra. Status: aguardando, pago, enviado, entregue, cancelado.

## Como rodar

```bash
npm install
npm run dev
```

Loja em `/`. Painel em `/admin`.

## Banco

Crie um Postgres (Supabase serve) e coloque a URL em `.env`:

```
DATABASE_URL="postgresql://user:pass@host:5432/loja"
```

Depois:

```bash
npx prisma db push
```

Ou rode `sql/schema.sql` direto no banco.

## Próximo passo

Importar a planilha dos 100 produtos para `products` e `variants`, e trocar os dados de exemplo em `lib/data.ts` pela consulta ao banco.

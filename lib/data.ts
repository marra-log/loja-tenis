import type { Category, Order, Post, Product } from "./types";

export const styles: Category[] = [
  { slug: "casual", name: "Casual", kind: "estilo", subs: [
    { slug: "urbano", name: "Urbano" },
    { slug: "couro", name: "Couro" },
  ]},
  { slug: "corrida", name: "Corrida", kind: "estilo", subs: [
    { slug: "treino", name: "Treino" },
    { slug: "performance", name: "Performance" },
  ]},
  { slug: "basquete", name: "Basquete", kind: "estilo", subs: [
    { slug: "quadra", name: "Quadra" },
    { slug: "lifestyle", name: "Lifestyle" },
  ]},
  { slug: "skate", name: "Skate", kind: "estilo", subs: [
    { slug: "classico", name: "Clássico" },
    { slug: "street", name: "Street" },
  ]},
];

export const brands: Category[] = [
  { slug: "nike", name: "Nike", kind: "marca", subs: [
    { slug: "air-force", name: "Air Force" },
    { slug: "dunk", name: "Dunk" },
    { slug: "pegasus", name: "Pegasus" },
  ]},
  { slug: "adidas", name: "Adidas", kind: "marca", subs: [
    { slug: "samba", name: "Samba" },
    { slug: "ultraboost", name: "Ultraboost" },
    { slug: "gazelle", name: "Gazelle" },
  ]},
  { slug: "new-balance", name: "New Balance", kind: "marca", subs: [
    { slug: "550", name: "550" },
    { slug: "574", name: "574" },
  ]},
];

const grade = (sizes: string[]) => sizes.map((size) => ({ size, stock: size === "40" ? 0 : 2 }));

export const products: Product[] = [
  {
    sku: "NK-AF1-WHT-01", name: "Air Force 1 '07 Branco", brand: "Nike", brandSlug: "nike", brandSub: "Air Force", brandSubSlug: "air-force",
    style: "Casual", styleSlug: "casual", styleSub: "Couro", styleSubSlug: "couro", gender: "unissex",
    price: 799.9, pixPrice: 759.9, description: "Couro liso, solado cupsole e caimento clássico.", featured: true, launch: true, bestseller: true, promo: false, active: true, cover: "/produtos/branco.jpg",
    variants: grade(["36", "37", "38", "39", "40", "41", "42"]),
  },
  {
    sku: "NK-DNK-BLK-02", name: "Dunk Low Black White", brand: "Nike", brandSlug: "nike", brandSub: "Dunk", brandSubSlug: "dunk",
    style: "Skate", styleSlug: "skate", styleSub: "Clássico", styleSubSlug: "classico", gender: "unissex",
    price: 899.9, pixPrice: 849.9, promoPrice: 799.9, description: "Couro premium e solado de borracha.", featured: true, launch: false, bestseller: true, promo: true, active: true, cover: "/produtos/preto.jpg",
    variants: grade(["38", "39", "40", "41", "42"]),
  },
  {
    sku: "AD-SAM-WHT-03", name: "Samba OG Branco", brand: "Adidas", brandSlug: "adidas", brandSub: "Samba", brandSubSlug: "samba",
    style: "Casual", styleSlug: "casual", styleSub: "Urbano", styleSubSlug: "urbano", gender: "unissex",
    price: 699.9, pixPrice: 659.9, description: "Couro e suede, solado gum.", featured: true, launch: true, bestseller: true, promo: false, active: true, cover: "/produtos/branco.jpg",
    variants: grade(["37", "38", "39", "40", "41"]),
  },
  {
    sku: "NB-550-GRY-04", name: "550 Cinza", brand: "New Balance", brandSlug: "new-balance", brandSub: "550", brandSubSlug: "550",
    style: "Basquete", styleSlug: "basquete", styleSub: "Lifestyle", styleSubSlug: "lifestyle", gender: "masculino",
    price: 849.9, pixPrice: 799.9, description: "Couro e mesh, visual de basquete dos anos 80.", featured: false, launch: false, bestseller: true, promo: false, active: true, cover: "/produtos/bege.jpg",
    variants: grade(["39", "40", "41", "42", "43"]),
  },
  {
    sku: "NK-PEG-RUN-05", name: "Pegasus 41", brand: "Nike", brandSlug: "nike", brandSub: "Pegasus", brandSubSlug: "pegasus",
    style: "Corrida", styleSlug: "corrida", styleSub: "Treino", styleSubSlug: "treino", gender: "masculino",
    price: 749.9, pixPrice: 709.9, promoPrice: 679.9, description: "Amortecimento diário para treino.", featured: false, launch: false, bestseller: false, promo: true, active: true, cover: "/produtos/preto.jpg",
    variants: grade(["40", "41", "42", "43"]),
  },
  {
    sku: "AD-ULT-06", name: "Ultraboost Light", brand: "Adidas", brandSlug: "adidas", brandSub: "Ultraboost", brandSubSlug: "ultraboost",
    style: "Corrida", styleSlug: "corrida", styleSub: "Performance", styleSubSlug: "performance", gender: "feminino",
    price: 999.9, pixPrice: 949.9, description: "Entressola leve e cabedal em malha.", featured: true, launch: true, bestseller: false, promo: false, active: true, cover: "/produtos/bege.jpg",
    variants: grade(["35", "36", "37", "38"]),
  },
  {
    sku: "AD-GAZ-07", name: "Gazelle Bege", brand: "Adidas", brandSlug: "adidas", brandSub: "Gazelle", brandSubSlug: "gazelle",
    style: "Casual", styleSlug: "casual", styleSub: "Urbano", styleSubSlug: "urbano", gender: "unissex",
    price: 649.9, pixPrice: 619.9, promoPrice: 579.9, description: "Suede macio e solado de borracha.", featured: false, launch: true, bestseller: false, promo: true, active: true, cover: "/produtos/bege.jpg",
    variants: grade(["36", "37", "38", "39", "40", "41"]),
  },
  {
    sku: "NB-574-08", name: "574 Branco", brand: "New Balance", brandSlug: "new-balance", brandSub: "574", brandSubSlug: "574",
    style: "Casual", styleSlug: "casual", styleSub: "Urbano", styleSubSlug: "urbano", gender: "unissex",
    price: 729.9, pixPrice: 689.9, description: "Silhueta clássica, uso diário.", featured: false, launch: false, bestseller: true, promo: false, active: true, cover: "/produtos/branco.jpg",
    variants: grade(["37", "38", "39", "40", "41", "42"]),
  },
  {
    sku: "NK-DUNK-ST-09", name: "Dunk Low Street", brand: "Nike", brandSlug: "nike", brandSub: "Dunk", brandSubSlug: "dunk",
    style: "Skate", styleSlug: "skate", styleSub: "Street", styleSubSlug: "street", gender: "masculino",
    price: 929.9, pixPrice: 879.9, description: "Cabedal reforçado para rua.", featured: false, launch: true, bestseller: false, promo: false, active: true, cover: "/produtos/preto.jpg",
    variants: grade(["39", "40", "41", "42", "43"]),
  },
  {
    sku: "AD-QUADRA-10", name: "Court Legacy", brand: "Adidas", brandSlug: "adidas", brandSub: "Samba", brandSubSlug: "samba",
    style: "Basquete", styleSlug: "basquete", styleSub: "Quadra", styleSubSlug: "quadra", gender: "masculino",
    price: 559.9, pixPrice: 529.9, promoPrice: 499.9, description: "Visual de quadra, solado de borracha.", featured: false, launch: false, bestseller: false, promo: true, active: true, cover: "/produtos/branco.jpg",
    variants: grade(["40", "41", "42", "43"]),
  },
];

export const posts: Post[] = [
  {
    slug: "como-escolher-numeracao",
    title: "Como escolher a numeração sem errar",
    excerpt: "O que olhar na grade antes de fechar o pedido.",
    body: "Meça o pé no fim do dia, quando ele está um pouco maior. Se você fica entre dois números, fique com o maior: tênis de couro cede pouco na largura. Na ficha, tamanho esgotado continua visível para você não achar que a numeração não existe.",
    date: "09/10/2026",
    cover: "/banners/editorial.jpg",
    published: true,
  },
  {
    slug: "pix-ou-cartao",
    title: "Pix ou cartão: quando cada um vale mais",
    excerpt: "O desconto de 5% no Pix já está na ficha.",
    body: "No Pix o preço menor aparece antes de pagar. O cupom de abertura não soma com esse desconto. Cartão vale quando você quer parcelar. O estoque só baixa quando o pagamento confirma.",
    date: "08/10/2026",
    cover: "/banners/desconto.jpg",
    published: true,
  },
  {
    slug: "cuidado-com-couro",
    title: "Como cuidar do tênis de couro",
    excerpt: "Limpeza simples para a peça durar a temporada.",
    body: "Pano úmido e sabão neutro. Sem máquina, sem secador. Guarde com o par afastado da luz direta. Couro branco pede um pano limpo a cada uso, senão a sujeira entra no risco.",
    date: "07/10/2026",
    cover: "/banners/hero.jpg",
    published: true,
  },
];

export const banners = [
  { id: "hero", title: "Tênis de prateleira, grade completa.", subtitle: "Estilo, marca e numeração no centro.", image: "/banners/hero.jpg", href: "/catalogo" },
  { id: "desconto", title: "Promoções da semana", subtitle: "Preço riscado já na ficha.", image: "/banners/desconto.jpg", href: "/promocoes" },
  { id: "editorial", title: "Lançamentos", subtitle: "O que acabou de chegar.", image: "/banners/editorial.jpg", href: "/lancamentos" },
];

export const orders: Order[] = [
  { number: 1042, status: "pago", customer: "Marina Alves", email: "marina@email.com", items: 1, total: 759.9, payment: "Pix", createdAt: "09/10 18:12" },
  { number: 1041, status: "enviado", customer: "Lucas Ferreira", email: "lucas@email.com", items: 2, total: 1509.8, payment: "Cartão", createdAt: "09/10 11:40" },
  { number: 1040, status: "aguardando", customer: "Ana Ribeiro", email: "ana@email.com", items: 1, total: 849.9, payment: "Pix", createdAt: "08/10 21:05" },
  { number: 1039, status: "entregue", customer: "Pedro Souza", email: "pedro@email.com", items: 1, total: 659.9, payment: "Cartão", createdAt: "07/10 16:22" },
];

export const seed = { products, styles, brands, posts };

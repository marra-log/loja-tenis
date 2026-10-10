-- Schema Postgres. Espelha o Prisma. Rode no Supabase ou em qualquer Postgres 14+.

create type gender as enum ('masculino', 'feminino', 'unissex');
create type order_status as enum ('aguardando', 'pago', 'enviado', 'entregue', 'cancelado');
create type payment_method as enum ('pix', 'cartao');
create type coupon_type as enum ('percentual', 'fixo');
create type role as enum ('admin', 'visualizacao');

create table admin_users (
  id text primary key,
  email text unique not null,
  name text not null,
  role role not null default 'admin',
  created_at timestamptz not null default now()
);

create table products (
  id text primary key,
  sku text unique not null,
  name text not null,
  brand text not null,
  category text not null,
  gender gender not null,
  price numeric(10,2) not null,
  pix_price numeric(10,2),
  description text not null,
  featured boolean not null default false,
  active boolean not null default true,
  cover_image text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index products_filters on products (brand, category, gender, active);

create table product_images (
  id text primary key,
  product_id text not null references products(id) on delete cascade,
  url text not null,
  position int not null default 0
);

create table variants (
  id text primary key,
  product_id text not null references products(id) on delete cascade,
  size text not null,
  stock int not null default 0,
  unique (product_id, size)
);

create table customers (
  id text primary key,
  name text not null,
  email text unique not null,
  phone text,
  created_at timestamptz not null default now()
);

create table addresses (
  id text primary key,
  customer_id text not null references customers(id) on delete cascade,
  zip text not null,
  street text not null,
  number text not null,
  complement text,
  district text not null,
  city text not null,
  state text not null,
  is_default boolean not null default false
);

create table orders (
  id text primary key,
  number serial unique,
  status order_status not null default 'aguardando',
  payment_method payment_method not null,
  customer_id text references customers(id),
  guest_name text not null,
  guest_email text not null,
  guest_phone text,
  zip text not null,
  street text not null,
  number_addr text not null,
  district text not null,
  city text not null,
  state text not null,
  shipping_method text not null,
  shipping_price numeric(10,2) not null,
  tracking_code text,
  coupon_code text,
  discount numeric(10,2) not null default 0,
  subtotal numeric(10,2) not null,
  total numeric(10,2) not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table order_items (
  id text primary key,
  order_id text not null references orders(id) on delete cascade,
  product_id text not null references products(id),
  variant_id text not null references variants(id),
  name text not null,
  size text not null,
  unit_price numeric(10,2) not null,
  quantity int not null
);

create table coupons (
  id text primary key,
  code text unique not null,
  type coupon_type not null,
  value numeric(10,2) not null,
  expires_at timestamptz,
  max_uses int,
  used int not null default 0,
  active boolean not null default true
);

create table banners (
  id text primary key,
  title text not null,
  subtitle text,
  image text not null,
  href text not null default '/catalogo',
  position int not null default 0,
  active boolean not null default true
);

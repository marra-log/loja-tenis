import { banners } from "@/lib/data";

export default function AdminBanners() {
  return (
    <>
      <h1>Banners da home</h1>
      <div className="grid" style={{ marginBottom: 16 }}>
        {banners.map((b) => (
          <article key={b.id} className="card">
            <img className="cover" src={b.image} alt={b.title} />
            <div className="card-body">
              <strong>{b.title}</strong>
              <div style={{ color: "#6e6a62", fontSize: 13 }}>{b.href}</div>
            </div>
          </article>
        ))}
      </div>
      <form className="form panel" style={{ padding: 16 }}>
        <div><label>Título</label><input placeholder="Primeira linha, grade completa" /></div>
        <div><label>Link</label><input placeholder="/catalogo" /></div>
        <div className="full"><label>Imagem</label><input type="file" /></div>
        <div className="full"><button className="btn dark" type="button">Publicar banner</button></div>
      </form>
    </>
  );
}

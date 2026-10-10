export default function NewProduct() {
  return (
    <>
      <h1>Novo produto</h1>
      <form className="form panel" style={{ padding: 16 }}>
        <div><label>SKU</label><input placeholder="NK-AF1-WHT-01" /></div>
        <div><label>Nome</label><input placeholder="Nome na vitrine" /></div>
        <div><label>Marca</label><input /></div>
        <div><label>Categoria</label><select><option>casual</option><option>corrida</option><option>basquete</option></select></div>
        <div><label>Gênero</label><select><option>unissex</option><option>masculino</option><option>feminino</option></select></div>
        <div><label>Preço</label><input placeholder="799.90" /></div>
        <div><label>Preço Pix</label><input placeholder="759.90" /></div>
        <div><label>Destaque</label><select><option>não</option><option>sim</option></select></div>
        <div className="full"><label>Descrição</label><textarea rows={4} /></div>
        <div className="full"><label>Grade</label><input placeholder="38:2, 39:4, 40:0" /></div>
        <div className="full"><label>Foto de capa</label><input type="file" /></div>
        <div className="full"><button className="btn dark" type="button">Salvar</button></div>
      </form>
    </>
  );
}

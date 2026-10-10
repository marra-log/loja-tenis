export default function AdminCoupons() {
  return (
    <>
      <h1>Cupons</h1>
      <form className="form panel" style={{ padding: 16, marginBottom: 14 }}>
        <div><label>Código</label><input placeholder="ABERTURA10" /></div>
        <div><label>Tipo</label><select><option>percentual</option><option>fixo</option></select></div>
        <div><label>Valor</label><input placeholder="10" /></div>
        <div><label>Validade</label><input type="date" /></div>
        <div className="full"><button className="btn dark" type="button">Criar cupom</button></div>
      </form>
    </>
  );
}

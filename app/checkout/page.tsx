import { StoreShell } from "@/components/StoreShell";

export default function CheckoutPage() {
  return (
    <StoreShell>
      <section className="section">
        <div className="wrap">
          <h2>Checkout</h2>
          <form className="form panel" style={{ padding: 16 }}>
            <div><label>Nome</label><input placeholder="Nome completo" /></div>
            <div><label>E-mail</label><input placeholder="voce@email.com" /></div>
            <div><label>CEP</label><input placeholder="00000-000" /></div>
            <div><label>Frete</label><select><option>Sedex — a calcular</option><option>PAC — a calcular</option></select></div>
            <div className="full"><label>Pagamento</label><select><option>Pix</option><option>Cartão</option></select></div>
            <div className="full"><button className="btn dark" type="button">Pagar</button></div>
          </form>
        </div>
      </section>
    </StoreShell>
  );
}

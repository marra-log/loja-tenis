import { PolicyLayout } from "@/components/PolicyLayout";

export default function EnvioPage() {
  return (
    <PolicyLayout title="Envio e prazos">
      <p>Pedido pago sai em até 24 horas úteis. O prazo de entrega começa a contar depois da postagem e depende do CEP.</p>
      <p>O frete é cotado no checkout pelo CEP. Enquanto a conta de frete não estiver ativa, vale uma tabela por região, informada antes do pagamento.</p>
      <p>O código de rastreio entra no pedido assim que a transportadora confirma a coleta. Você acompanha em Minha conta e no e-mail.</p>
      <p>Não enviamos para caixa postal. Confira o endereço antes de pagar: alteração depois da postagem depende da transportadora.</p>
    </PolicyLayout>
  );
}

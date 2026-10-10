import { PolicyLayout } from "@/components/PolicyLayout";

export default function PrivacidadePage() {
  return (
    <PolicyLayout title="Privacidade">
      <p>Coletamos nome, e-mail, telefone e endereço para entregar o pedido e falar sobre ele. Pagamento é processado pelo Mercado Pago: não guardamos o número do cartão.</p>
      <p>Usamos esses dados para cobrar, enviar, trocar e cumprir obrigação legal. Não vendemos lista de clientes.</p>
      <p>Você pode pedir acesso, correção ou exclusão dos seus dados pelo e-mail de suporte. A exclusão não apaga o que a lei obriga a guardar, como o registro da compra.</p>
      <p>Este texto é o mínimo de lançamento. A versão final entra com o material jurídico da loja.</p>
    </PolicyLayout>
  );
}

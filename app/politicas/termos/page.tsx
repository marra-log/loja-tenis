import { PolicyLayout } from "@/components/PolicyLayout";

export default function TermosPage() {
  return (
    <PolicyLayout title="Termos de uso">
      <p>Ao comprar, você confirma que os dados do pedido são seus e que o endereço de entrega está correto.</p>
      <p>O preço válido é o do momento do pagamento. Estoque é baixado quando o pagamento confirma. Se a peça acabar entre o carrinho e o pagamento, o pedido não é concluído e o valor não é cobrado.</p>
      <p>Cupom não cumulativo com o desconto Pix, salvo indicação contrária na página de descontos. Cupom vencido ou esgotado não é aplicado.</p>
      <p>A loja pode recusar pedido com indício de fraude, sem prejuízo de comunicação ao cliente.</p>
    </PolicyLayout>
  );
}

import Link from "next/link";
import { PolicyLayout } from "@/components/PolicyLayout";

export default function PoliciesIndex() {
  return (
    <PolicyLayout title="Políticas da loja">
      <p>Textos de operação para o lançamento. O jurídico da loja substitui estes quando o pacote de materiais chegar.</p>
      <ul>
        <li><Link href="/politicas/trocas">Trocas e arrependimento</Link></li>
        <li><Link href="/politicas/envio">Envio e prazos</Link></li>
        <li><Link href="/politicas/privacidade">Privacidade</Link></li>
        <li><Link href="/politicas/termos">Termos de uso</Link></li>
      </ul>
    </PolicyLayout>
  );
}

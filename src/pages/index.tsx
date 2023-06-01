import Cabecalho from "@/components/Cabecalho";
import Conteudo from "@/components/Conteudo";
import Grade from "@/components/Grade";
import Pagina from "@/components/Pagina";
import PremiumBar from "@/components/PremiumBar";
import Rodape from "@/components/Rodape";

export default function Home() {
  return (
    <Pagina>
      <Cabecalho/>
      <Grade>
      <PremiumBar/>
      <Conteudo/>
      </Grade>
      <Rodape/>
    </Pagina>
  )
}

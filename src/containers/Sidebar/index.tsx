import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"

import { Descricao, BotaoTema, SidebarContainer} from './style'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      < Avatar />
      <Titulo fontSize={20} >Jorge Luiz</Titulo>
      <Paragrafo tipo="secundario" fontSize={16} >thejljorgeluiz</Paragrafo>
      <Descricao tipo="principal" fontSize={12} >Engenheiro Front-End</Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
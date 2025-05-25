import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import {Card, LinkBotao} from './styled'

const Projeto = () => {
  return (
    <Card>
      <Titulo>Projeto Lista de Tarefas</Titulo>
      <Paragrafo tipo='secundario'>Lista de Tarefas feita COM Vuejs</Paragrafo>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  )
}

export default Projeto
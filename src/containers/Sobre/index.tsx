import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";


const Sobre = () => (
  <section>
    <Titulo fontSize={16} >Sobre Mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Reiciendis neque necessitatibus natus nemo cum placeat tenetur labore,
      eos illum veniam libero aut amet.
      Minus, illum pariatur. Beatae fuga possimus quia.
    </Paragrafo>
    <GithubSecao/>
    <div>
      <img src="https://github-readme-stats.vercel.app/api?username=thejorgeluiz&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=thejorgeluiz&layout=compact&langs_count=7&theme=dracula" />
    </div>
  </section>
)

export default Sobre;
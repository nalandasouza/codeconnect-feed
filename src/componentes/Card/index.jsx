import Code from './assets/code.svg'
import Chat from './assets/chat.svg'
import Share from './assets/share.svg'
import './styles.css'

export default function Card({ id, imagemUrl, titulo, resumo, LinhasDeCodigo, compartilhamentos, comentarios, usuario }) {
    return (
        <article className='card' id={id}>
            <div className="card__imagem">
                <img src={imagemUrl} alt="Imagem do post" />
            </div>
            <div className="card__conteudo">
                <div className="conteudo__texto">
                    <h3>{titulo}</h3>
                    <p>{resumo}</p>
                </div>

                <div className="conteudo__rodape">
                    <ul>
                        <li>
                            <img src={Code} alt='códigos' />
                            {LinhasDeCodigo}
                        </li>
                        <li>
                            <img src={Share} alt='compartilhamentos' />
                            {compartilhamentos}
                        </li>
                        <li>
                            <img src={Chat} alt='comentários' />
                            {comentarios}
                        </li>
                    </ul>

                    <div className="rodape__usuario">
                        <img src={usuario.imagem} alt="imagem do usuario" />
                        {usuario.nome}
                    </div>
                </div>
            </div>
        </article>
    )
}
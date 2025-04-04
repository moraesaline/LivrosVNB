import livroProtagonista from '../../assets/oprotagonista.png'
import s from './livrosDoados.module.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { data } from 'react-router-dom'

export default function LivrosDoados(){

    const [livros, setLivros] = useState([])

    const puxarLivros = async() =>{
        const resposta = await axios.get("https://api-livros-1-3k81.onrender.com/livros")
        setLivros(resposta.data)
    }

    useEffect(()=>{
        puxarLivros()
    },[])


    return(
        <section className={s.livrosDoadosSection}>
            <h2>Livros Doados</h2>
            <section className={s.containerCards}>

                {
                    livros.map((item)=>(
                    <section> 
                        <img src={item.image_url} alt="Título do livro" />
                        <h3>{item.titulo}</h3>
                        <p>{item.autor}</p>
                        <p>{item.categoria}</p>
                    </section>
                    ))
                }
        </section>
        </section>
    )
}
 
//*   <section>
//* <img src={livroProtagonista} alt="Imagem do livro O Protagonista" />
//*<div>
   //* <h3>O protagonista</h3>
    //*<p>Susanne Andrade</p>
    //*<p>Ficção</p>
//*</div>
//*</section> 

import S from './querodoar.module.scss'
import Livro from '../../assets/Vector.png'
import { useState } from 'react';
import axios from 'axios';

export default function LivrosDoados() {

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [image_url, setImage_url] = useState("")

    const capturaTitulo = (e) =>{
        setTitulo(e.target.value)
    }

    const capturaCategoria = (e) =>{
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) =>{
        setAutor(e.target.value)
    }

    const capturaImage = (e) =>{
        setImage_url(e.target.value)
    }

    const enviarDados = async() =>{
      console.log(titulo)
      console.log(categoria)
      console.log(autor)
      console.log(image_url)
    const dadosPEnviar = {
          titulo,
          categoria,
          autor,
          image_url
        }

        await axios.post("https://api-livros-1-3k81.onrender.com/doar", dadosPEnviar)

    }

    return (
      <section className={S.principal}>
        <section className={S.container}>
          <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <img src={Livro} alt=""/>
              <h2>Informações do Livro</h2>
            </div>
         <input type="text"  placeholder='Titulo' onChange={capturaTitulo} />
         <input type="text"  placeholder='Categoria' onChange={capturaCategoria}/>
         <input type="text"  placeholder='Autor' onChange={capturaAutor}/>
         <input type="text"  placeholder='Link da imagem' onChange={capturaImage}/>
         <input type="submit" value="Doar" className={S.buttonDoar} onClick={enviarDados}/>
          </form>
        </section>
      </section>
    );
  }
  
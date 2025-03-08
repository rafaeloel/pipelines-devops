import { useEffect, useState, useRef } from 'react'
import Trash from '../../assets/icons-lixo.svg'
import './style.css'
import api from '../../services/api'

function Home() {
  const [autores, setAutores] = useState([])

  const inputName = useRef()

  // const inputNumero = useRef()
  // const inputTitulo = useRef()
  // const inputEdicao = useRef()
  // const inputIsbn = useRef()
  // const inputCategoria = useRef()

  async function getAutores() {
    const response = await api.get('/autor')

    setAutores(response.data)

    console.log(autores)
  }

  async function createAutor() {

    await api.post('/autor', {
      nome: inputName.current.value
    })
    getAutores()
  }

  async function deleteAutor(id) {

    await api.delete(`/autor/${id}`)
    getAutores()
  }

  // useEffect(() => {
  //   getAutores()
  // }, [])

  return (
    <div className='container'>
      <h1>LIVRARIA</h1>
      <form className='formAutores'>
        <h1>Cadastro de Autor</h1>
        <input placeholder="Nome" name='Autor' type='text' ref={inputName}></input>
        <button type='button' 
        // onClick={createAutor}
        >Salvar</button>
      </form>

      {/* {autores.map(autor => (
        <div key={autor.numero} className="card">
          <div>
            <p>Nome:  <span>{autor.nome}</span></p>
            <p>Numero: <span>{autor.numero}</span></p>
          </div>
          <button onClick={() => deleteAutor(autor.numero)}>
            <img src={Trash} />
          </button>
        </div>
      ))} */}
{/* 
      <form className='formLivros'>
        <h1>Cadastro de Livros</h1>
        <input placeholder="Codigo Autor" name='Codigo Autor' type='text' ref={inputNumero}></input>
        <input placeholder="Titulo" name='Titulo' type='text' ref={inputTitulo}></input>
        <input placeholder="Edicao" name='Edicao' type='text' ref={inputEdicao}></input>
        <input placeholder="Isbn" name='Isbn' type='text' ref={inputIsbn}></input>
        <input placeholder="Categoria" name='Categoria' type='text' ref={inputCategoria}></input>

        <button type='button' onClick={createAutor}>Salvar</button>
      </form> */}

    </div>



  )
}

export default Home

import { useState } from "react";

function App (){

const [nome, setNome] = useState("Neymar")

// var nome = "Neymar Jr";

const Formulario = () => {
  return (

    <div>
    <input
      className="nome"
      name= "nome"
      onChange={(e)=>{setNome(e.target.value)}}
      placeholder="Digite um nome..."
       type="text" />
      <button
      className="botão"
      onClick={()=>{alert(nome)}}>
      CLIQUE AQUI
      
      </button>

    </div>


  )
}

  return (
    <div>
      <h3>Pizzaria 2F</h3>
      
    </div>
  )
}

export default App
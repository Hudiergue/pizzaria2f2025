import axios from "axios"
const Produtos = () => {
// Consumo de um endpoint com as pizzas

    axios.get(("http://viacep.com.br/ws/01010000/json")
    .then(response=>{
        console.log(response.data)

    })
    
    //Alteração da lista de pizzas 
    const listaPizzas = pizzas.map(pizza=><li>{pizza<}</li>)   
    return(
        <div>
            <ul>
              {listaPizzas}

            </ul>
        </div>
    )
}

export default Produtos
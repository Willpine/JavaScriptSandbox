// Hook(funcionalidade) para definir estados dentro do componente
// Cada component tem seu próprio estado, independente de suas cópias
// se definimos um estado dentro do componente
import {useState} from 'react'

// Declaramos uma tipagem para
// as propriedades deste component
// Agora ele pode receber uma color
interface ButtonProps{
    color: string;
    children: string;
}

// Podemos usar chaves para usarmos código
// javascript dentro do JSX

// Podemos passar o style assim como no
// CSS, porém, normalmente passamos como
// um objeto do javascript

// A propriedade children permite ao component
// possuir conteúdo dentro de sua tag HTML, ex:
// <Button> botao </Button>
export function Button(props: ButtonProps){

    // Declaramos um use state
    // O useState sempre retorna um array com [apropriavariavel, umafuncaoparaatualizar]
    // O setCounter não altera o valor, ele cria um novo valor para counter
    const [counter, setCounter] = useState(1)

    function increment() {
        setCounter(counter+1);
    }

    return(
        <button 
        type='button'
        style={{backgroundColor: props.color}}
        onClick={increment}>
            {props.children} <strong>{counter}</strong>
        </button>
    );}
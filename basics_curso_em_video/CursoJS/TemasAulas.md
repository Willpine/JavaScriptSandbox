# TEMAS DAS AULAS

## AULA 05 - EX 1

Datatypes e caixas de diálogo.
window.alert('mensagem')
window.confirm('mensagem')
window.prompt('mensagem')

## AULA 06 - EX 2 3 e 4

Aula sobre datatypes e conversão de números e strings;

n1 = Number.parseInt(n1) // Nós quem determinamos o tipo
n2 = Number(n2) // Assim o JS decide se é inteiro ou real

n1 = String(n1) // Isso transforma num string
n1 = n1.toString() // Isso também

Na segunda parte, vemos String templates e formatação

## AULA 07 E 8

Sobre operadores relacionais, lógicos, atribuição, ternários.

## AULA 09 - DOM

Como selecionar elementos de uma página html.

## AULA 10 - EVENTOS

Como fazer event listeners usando inputs.

## AULA 11 E 12 - CONDIÇÕES

Construímos uma simples condição que avalia se alguém é estrangeiro ou nativo brasileiro.

Na aula 12 o que há de diferente é o switch. Igual no java.

Se declararmos um objeto Date e darmos um getDay, ele devolve hoje.

## AULA 12 - 2 EXERCÍCIOS

CSS e JavaScript externos.

No segundo exercício, aprendemos:

+ Funcionamento básico de radio buttons.
+ Definir estilos diretamente do javascript.
+ Criar elementos diretamente/dinâmicamente à partir do JS com id. Nesse caso, criamos uma imagem segundo o que foi escolhido pelo usuário.

## AULA 13 E 14 - REPETIÇÕES

+ while
+ do while
+ for

Nos exercícios da aula14, aprendi:

+ fundamentos de um select e options
+ como implementar emojis
+ selecionar todos os childs de um elemento pelo query selector

## AULA 15 - VARIÁVEIS COMPOSTAS

São simplesmente um vetor.

> let autos = []
> let autos = ['auto1','auto2','auto3']
> autos[3]='auto5'
> autos.push('auto4')
> autos.length // aqui é um atributo, não um método, por isso não tem parênteses
> autos.sort() // vai colocar todos os elementos em ordem crescente; ELE MUDA PERMANENTEMENTE

Pode-se printar o vetor diretamente, ou apenas fazer um *for in* usando seu length.

> for(let i in autos){
> console.log(autos[i])
> }

Podemos *pesquisar no vetor por valores* o que retorna a posição se ele existir:

> autos.indexOf('auto1')

Se ele retornar *-1*, *o valor não foi encontrado*

## AULA 16 - FUNÇÕES

Mesma coisa do java, porém:

+ É possível definir valores default para parâmetros:

> function soma (n1=0,n2=0){
>    return n1 + n2;
> }

Se não for passado n1 ou n2, são considerados 0.

+ Também é possível atribuir uma function a uma variável:

> let v = function(x) {
>    return x*2
> }

> v(2)
> 4

## Aula 17 - OBJETOS

Objetos são declarados usando {} e podem armazenar functions também.
let carro = {nome:'HB20',marca:'Hyundai',acelerar(p){}}
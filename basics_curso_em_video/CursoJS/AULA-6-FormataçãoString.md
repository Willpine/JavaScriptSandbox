# FORMATAÇÃO DE STRINGS E NÚMEROS

## Template String

Bons pra não ter que ficar concatenando;
Para isso usamos a CRASE e um placeholder ${s}

> `O aluno com ${nome} ${idade} anos tirou nota ${nota}`
## .length .upperCase .lowerCase

Já sabe

## document.write('Texto')

Escreve na página, que é um documento.

## Formatação de Números toFixed()

> let n1 = 2500.5
> n1.toFixed(2)
> '2500.50'
> n1.toFixed(2).replace('.',',')
> '2500,50'

## Formatação de Números conversão de moeda

> n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
> 'R$ 2.500,50'
> n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
> 'US$ 2.500,50'
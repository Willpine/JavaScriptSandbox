# DATATYPES

+ number (NÃO CONCATENE NÚMEROS, O WINDOWS PROMPT RETORNA UM STRING, SEMPRE)
    - Infinity
    - NaN = Not a Number
+ string
+ boolean
+ null (pode ser considerado um object)
+ undefined
+ object
    - Array
+ function

## Comando typeof

Um comando que permite sabermos qual o tipo da variável;
Posso definir uma variável que era um número como String depois de definida (Fracamente Tipada);

1 let n = 200
2 --- typeof n é number
3 n = 'pultz'
4 --- typeof n agora é string

## var ou let

É uma questão de escopo. Let vale apenas onde
foi declarado. var tem escopo GLOBAL.
var pode ser re-declarado:

1 var a = b
2 var a = 3

let não pode.

var => GLOBAL
let => BLOCO DE DECLARAÇÃO
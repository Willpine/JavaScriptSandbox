# DOCUMENT OBJECT MODEL

Conjunto de objetos dentro do navegador que dá acesso aos elementos do site

## Árvore DOM

Tudo está dentro de window, window é a raíz da árvore, tipo Object em java.

window
    location
    history
    document
        html
            head
                meta
                title
            body
                h1
                p
                p
                    strong
                div

No javascript: > window.document.write('Olá mundo'); Vai adicionar um elemento à página.

window.document.write(window.document.charset) // utf8
window.document.write(window.document.navigator.appname) // netscape
window.document.write(window.document.URL) // http://127.0.0.1:5500/basics_curso_em_video/CursoJS/ex005Aula09.html

Todo <elemento> é um elemento.

## É possível selecionar elementos:

+ por marca (getElementsByTagName()[0])
    let p1 = document.getElementsByTagName('p')[0] pega o primeiro elemento p. Poderia ser body, html, etc.
    p1.style.color = 'blue'
+ por ID (getElementById())
+ por nome (getElementsByName()[0])
+ por classe (getElementsByClassName()[0])
+ por seletor (SELECIONA ATRAVÉS DO CSS)
    - querySelector()
    let d = document.querySelector('div.msg') se o msg for a classe da div.
    let d = document.querySelector('div#msg') se o msg for o ID da div.

innerText pega sem a formatação
innerHtml pega o html inteiro
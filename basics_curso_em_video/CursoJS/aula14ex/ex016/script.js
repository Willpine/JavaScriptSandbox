let btnContar = document.querySelector('input#contar')
btnContar.addEventListener('click', contar)

function contar() {
    let inicio = Number.parseInt(document.querySelector('input#inicio').value)
    let fim = Number.parseInt(document.querySelector('input#fim').value)
    let passo = Number.parseInt(document.querySelector('input#passo').value)
    let res = document.querySelector('div#res')
    let contagem = ''
    if (inicio < fim) {
        if(passo <=1){
            alert('Valor inválido para passos.\nConsiderando o passo como 1')
            passo = 1
        }
        contagem += `${inicio} &#128073 `
        while((inicio + passo) <= fim){
            inicio += passo;
            contagem += `${inicio} &#128073 `
        }
        contagem += '&#127988'
        res.innerHTML = `<p>${contagem}</p>`
    } else {
        alert('O número inicial deve ser maior que o número final')
    }

}